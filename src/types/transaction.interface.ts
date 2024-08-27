export interface Transaction {
    txnHash: string
    type: string
    status: string
    date: string
    amount: string
    added?: boolean // New field
  }
export interface Transaction {
  block: number;
  hash: string;
  type: number;
  blockHash: string;
  blockNumber: number;
  confirmations: number;
  from: string;
  gasPrice: string;
  gas: string;
  to: string;
  value: string;
  nonce: number;
  data: string;
  r: string;
  s: string;
  v: number;
  chainId: number;
  }

export type TransactionsList = Transaction[]
