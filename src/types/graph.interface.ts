import { Node, Edge } from '@xyflow/react'

export interface NodeData extends Node {
  details: {
    address: string
  }
}

export interface EdgeData extends Edge {
    details: TransactionDetails
}

export interface TransactionDetails {
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