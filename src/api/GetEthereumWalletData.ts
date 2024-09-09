import { ApiResponse } from "@/types/etherscan.interface";

const API_KEY = "3YFA5Y51XEBGG1RKZC1BAPP6XTIU8HDCY4"; // Replace with your actual Etherscan API key
const BASE_URL = "https://api.etherscan.io/api";

export const getEthereumWalletData = async (address: string) => {
  try {
    // Fetch balance
    const balanceResponse = await fetch(`${BASE_URL}?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`);
    const balanceData = await balanceResponse.json();
    const balance = parseInt(balanceData.result) / 1e18; // Convert Wei to Ether

    console.log(`The balance of this Ethereum wallet is ${balance} ETH`);

    // Fetch transaction info
    const transactionResponse = await fetch(`${BASE_URL}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=${API_KEY}`);
    const transactionResponseData: ApiResponse = await transactionResponse.json();
    const transactionData = await transactionResponseData.result;
    console.log("🚀 ~ getEthereumWalletData ~ transactionData:", transactionData)

    return {
      balance: balanceData,
      transactions: transactionData,
    };
  } catch (error) {
    console.error("Error fetching wallet data: ", error);
    return {
        balance: 'shod_null',
        transactions: [],
    };;
  }

};
