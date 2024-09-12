const BASE_URL = "https://blockchain.info/rawaddr";

type Transaction = {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  size: number;
  weight: number;
  fee: number;
  relayed_by: string;
  lock_time: number;
  tx_index: number;
  double_spend: boolean;
  time: number;
  block_index: number;
  block_height: number;
  inputs: Array<any>;
  out: Array<any>;
};

type AddressResponse = {
  hash160: string;
  address: string;
  n_tx: number;
  n_unredeemed: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
  txs: Transaction[];
};

export const getAddressData = async (
  bitcoinAddress: string,
  limit: number = 50,
  offset: number = 0
): Promise<AddressResponse | null> => {
  try {
    const url = `${BASE_URL}/${bitcoinAddress}?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: AddressResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch Bitcoin address data:", error);
    return null;
  }
};
