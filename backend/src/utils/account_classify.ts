import { Network, Alchemy, AssetTransfersCategory, Utils } from 'alchemy-sdk';
enum AccountType {
  EOA,
  EOA_ACTIVE,
  EOA_INACTIVE,
  EOA_EXCHANGE,
  MINER,
  CONTRACT,
  CONTRACT_NORMAL,
  CONTRACT_EXCHANGE,
  UNKNOWN,
  INVALID
}

const settings = {
  apiKey: 'MKvBAJsZLrRwfyXqgLavDif9Ba6xs9eo',
  network: Network.ETH_MAINNET
};

const alchemy = new Alchemy(settings);

const exchangeAddresses = ['0x28C6c06298d514Db089934071355E5743bf21d60'];
const inactiveAddresses = ['0x0000000000000000000000000000000000000000'];

const miner: string[] = [];

async function classfifyAccount(address: string): Promise<AccountType[]> {
  const accountType: AccountType[] = [];
  if (isValidAddress(address) == false) {
    accountType.push(AccountType.INVALID)
  }
  if (await isEOA(address)) {
    if (await isMINER(address)) {
      accountType.push(AccountType.MINER);
    } 
    if (await isEOA_EXCHANGE(address)) {
      accountType.push(AccountType.EOA_EXCHANGE);
    }
    if (await isEOA_ACTIVE(address)) {
      accountType.push(AccountType.EOA_ACTIVE);
    
    } else {
      accountType.push(AccountType.EOA_INACTIVE);
    }

  } else if (await isContract(address)) {

    if (await isCONTRACT_EXCHANGE(address)) {
      accountType.push (AccountType.CONTRACT_EXCHANGE);

    } else {
      accountType.push (AccountType.CONTRACT)
    }
  }
  return accountType;
}
//NOTE: Done
async function isEOA(address: string): Promise<boolean> {
  const checkEOA: boolean = await alchemy.core.isContractAddress(address);
  if (checkEOA) {
    return false;
  }
  return true;
}
async function isContract(address: string): Promise<boolean> {
  const isContract = await alchemy.core.isContractAddress(address);
  if (!isContract) {
    return false;
  }
  return true
}
async function isEOA_ACTIVE(address: string): Promise<boolean> {
  const checkActive: number = await alchemy.core.getTransactionCount(address);
  if (checkActive == 0) {
    return false;
  }
  return true;
}

//TODO: Implement the isValidAddress function
function isValidAddress(address: string): boolean {
  if (typeof address !== 'string') {
    return false;
  }

  // Check length and prefix
  if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
    return false;
  }
  return true;
}

async function isEOA_INACTIVE(address: string): Promise<boolean> {
  const isActive: number = await alchemy.core.getTransactionCount(address);
  if (isActive == 0) {
    //NOTE: Add the inactive address to the list
    inactiveAddresses.push(address);
    return true;
  }
  return false;
}
//TODO: Fill the exchangeAddress
async function isEOA_EXCHANGE(address: string): Promise<boolean> {
  if (address in exchangeAddresses) {
    return true;
  }
  return false;
}

//TODO: 
async function isMINER(address: string): Promise<boolean> {
  if (address in miner) {
    return false;
  }
  return true;
}

async function isCONTRACT_NORMAL(address: string): Promise<boolean> {

  return false;
}

async function isCONTRACT_EXCHANGE(address: string): Promise<boolean> {
  if (address in exchangeAddresses) {
    return true;
  }
  return false;
}

// async function main() {
//   const checkActive: number = await alchemy.core.getTransactionCount(
//     '0xed5dd27b1a11fb0f7c0a9630aaf982657c27cdbb'
//   );
//   console.log(checkActive);
// }

// main();
