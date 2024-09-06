import { Node, Edge } from '@xyflow/react'

export interface NodeData extends Node {
  details: Account
}

export interface EdgeData extends Edge {
    details: TransactionDetails
}

export interface BigNumber {
  type: string; // Usually 'BigNumber'
  hex: string;  // The hexadecimal string representing the number
}

export interface Account {
  publicAddress: string;
  classify: string;
}

export interface TransactionDetails {
  blockNumber: number;  
  blockHash: string;
  hash: string;
  type: number;
  confirmations: number;
  from: Account;
  gasPrice: BigNumber;
  maxPriorityFeePerGas?: BigNumber;
  maxFeePerGas?: BigNumber;
  gasLimit: BigNumber;
  to: Account;
  value: BigNumber;
  nonce: number;
  data: string;
  r: string;
  s: string;
  v: number;
  chainId: number;
}