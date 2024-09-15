import { BigNumber, ethers } from 'ethers';
import { JsonRpcProvider } from '@ethersproject/providers';
import { Alchemy, Network, AssetTransfersCategory, SortingOrder, fromHex, TokenMetadataResponse, TokenBalancesResponse } from 'alchemy-sdk';

import { getRandomDrpcAPI, getRandomAlchemyAPI, getRandomBitQueryAPI } from '../configs/provider.configs';
import { BigNumbertoEther } from '~/utils/convertEther';
import { ProviderType } from '~/types/providers.type';
import axios from 'axios';
import { timestampToDate } from '~/utils/datetime';

interface BalanceHistory {
  value: string; // assuming value can be a string (e.g., for large numbers)
  transferAmount: string; // same as above
  timestamp: string; // ISO 8601 date string
  block: string; // block number or hash
}

interface EthereumResponse {
  data: {
    ethereum: {
      address: {
        balances: {
          history: BalanceHistory[];
          currency: {
            name: string;
            symbol: string;
          };
        }[];
        smartContract: {
          currency: {
            symbol: string;
            name: string;
            tokenType: string;
          };
          contractType: string;
        };
      }[];
    };
  }
}

async function getUserInformation(address: string, currency_address: string, timestamp: number) {
  try {
    const [datetimeISO, dateISO] = timestampToDate(timestamp)
    const API_KEY = getRandomBitQueryAPI()
    const response = await axios.post(
      'https://graphql.bitquery.io',
      {
        query: `
        query MyQuery {
          ethereum {
            address(address: {is: "${address}"}) {
              balances(
                currency: {is: "${currency_address}"}
                date: {after: "${datetimeISO}"}
              ) {
                history {
                  value
                  transferAmount
                  timestamp
                  block
                }
                currency {
                  name
                  symbol
                }
              }
              smartContract {
                currency {
                  symbol
                  name
                  tokenType
                }
              }
            }
          }
        }
        `
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': `${API_KEY}`
        }
      }
    );
    const result: EthereumResponse = response.data;

    const last_timestamp = result.data.ethereum.address[0].balances[0].history.slice(-1)[0].timestamp
    const returnObject = {
      "result": result,
      "last_timestamp": last_timestamp
    }
    return returnObject
  } catch (error) {
    console.log(error)
    throw new Error()
  }
}

async function getUserBalance(address: string) {
  const provider: JsonRpcProvider = getRandomDrpcAPI();
  const balance: BigNumber = await provider.getBalance(address);
  const balanceETH = BigNumbertoEther(balance);
  return balanceETH;
}

async function getNFTTransaction(
  NFT_address: string[],
  nftId: number,
  pageKey: string | undefined,
  fromBlock: string = '0x0',
) {

  const alchemy: Alchemy = getRandomAlchemyAPI();
  const response = await alchemy.core.getAssetTransfers({
    fromBlock: fromBlock,
    contractAddresses: NFT_address,
    category: [AssetTransfersCategory.ERC721],
    excludeZeroValue: false,
    pageKey: pageKey
  });

  let txns = response.transfers.filter((txn) => fromHex(txn.erc721TokenId || '-1') === nftId);

  return txns;
}

interface TokenBalancesReturn {
  address: string,
  tokenBalances: TokenBalanceReturn[]
};

type TokenBalanceReturn = {
  tokenBalance: {
    contractAddress: string;
    tokenBalance: string;
  }
}

async function getAddressTokenBalance(ownerAddress: string, tokenAddresses: string[]) {
  try {
    const alchemy: Alchemy = getRandomAlchemyAPI();
    const data: TokenBalancesResponse = await alchemy.core.getTokenBalances(ownerAddress, tokenAddresses);
    // const dataReturn: TokenBalanceReturn = 
    return data;
  } catch {
    throw new Error("Cannot get Address Token Balance Service")
  }
}

async function getAddressTransactions(
  fromAddress: string,
  fromBlock: string = '0x0',
  toAddress: string | undefined = undefined,

  category: AssetTransfersCategory[] = [
    AssetTransfersCategory.EXTERNAL,
    AssetTransfersCategory.ERC1155,
    AssetTransfersCategory.INTERNAL,
    AssetTransfersCategory.ERC20,
    AssetTransfersCategory.ERC721,
    AssetTransfersCategory.SPECIALNFT
  ],
  order: SortingOrder = SortingOrder.ASCENDING, // latest transaction last
  pageKey: string | undefined = undefined
) {
  if (toAddress == '') {
    toAddress = undefined;
  }
  const alchemy: Alchemy = getRandomAlchemyAPI();
  const params = {
    fromBlock: fromBlock,
    fromAddress: fromAddress,
    category: category,
    order: order,
    toAddress: toAddress,
    withMetadata: true,
    pageKey
  };

  const transactionHistory = await alchemy.core.getAssetTransfers(params);
  return transactionHistory;
}

async function getAddressERC20Transaction(
  fromAddress: string,
  fromBlock: string = '0x0',
  toAddress: string | undefined = undefined,
  order: SortingOrder = SortingOrder.ASCENDING, // latest transaction last
  pageKey: string | undefined = undefined
) {
  const alchemy: Alchemy = getRandomAlchemyAPI();

  const category: AssetTransfersCategory[] = [AssetTransfersCategory.ERC20];

  const params = {
    fromBlock: fromBlock,
    fromAddress: fromAddress,
    category: category,
    order: order,
    toAddress: toAddress,
    withMetadata: true,
    pageKey
  };

  const transactionHistory = await alchemy.core.getAssetTransfers(params);
  return transactionHistory;
}

async function getAddressERC721Transaction(
  fromAddress: string,
  fromBlock: string = '0x0',
  toAddress: string | undefined = undefined,
  order: SortingOrder = SortingOrder.ASCENDING, // latest transaction last
  pageKey: string | undefined = undefined
) {
  const alchemy: Alchemy = getRandomAlchemyAPI();

  const category: AssetTransfersCategory[] = [AssetTransfersCategory.ERC721];

  const params = {
    fromBlock: fromBlock,
    fromAddress: fromAddress,
    category: category,
    order: order,
    toAddress: toAddress,
    withMetadata: true,
    pageKey
  };

  const transactionHistory = await alchemy.core.getAssetTransfers(params);
  return transactionHistory;
}

async function getAddressERC721TransactionByETH(
  fromAddress: string,
  fromBlock: string = '0x0',
  toAddress: string | undefined = undefined,
  order: SortingOrder = SortingOrder.ASCENDING, // latest transaction last
  pageKey: string | undefined = undefined
) {
  const alchemy: Alchemy = getRandomAlchemyAPI();

  const category: AssetTransfersCategory[] = [
    AssetTransfersCategory.ERC721,
    AssetTransfersCategory.EXTERNAL
  ];

  const params = {
    fromBlock: fromBlock,
    fromAddress: fromAddress,
    category: category,
    order: order,
    toAddress: toAddress,
    withMetadata: true,
    pageKey
  };

  const transactionHistory = await alchemy.core.getAssetTransfers(params);
  return transactionHistory;
}

async function getAddressERC721TransactionByERC20(
  fromAddress: string,
  fromBlock: string = '0x0',
  toAddress: string | undefined = undefined,
  order: SortingOrder = SortingOrder.ASCENDING, // latest transaction last
  pageKey: string | undefined = undefined
) {
  const alchemy: Alchemy = getRandomAlchemyAPI();

  const category: AssetTransfersCategory[] = [
    AssetTransfersCategory.ERC721,
    AssetTransfersCategory.ERC20
  ];

  const params = {
    fromBlock: fromBlock,
    fromAddress: fromAddress,
    category: category,
    order: order,
    toAddress: toAddress,
    withMetadata: true,
    pageKey
  };

  const transactionHistory = await alchemy.core.getAssetTransfers(params);
  return transactionHistory;
}

export {
  getUserBalance,
  getAddressTransactions,
  getAddressERC20Transaction,
  getAddressERC721TransactionByETH,
  getAddressERC721TransactionByERC20,
  getAddressERC721Transaction,
  getNFTTransaction,
  getAddressTokenBalance, getUserInformation
};
