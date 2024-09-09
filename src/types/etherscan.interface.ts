export interface TransactionResult {
    blockNumber: string;
    blockHash: string;
    timeStamp: string;
    hash: string;
    nonce: string;
    transactionIndex: string;
    from: string;
    to: string;
    value: string;
    gas: string;
    gasPrice: string;
    input: string;
    methodId: string;
    functionName: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    txreceipt_status: string;
    gasUsed: string;
    confirmations: string;
    isError: string;
}

export interface ApiResponse {
    status: string;
    message: string;
    result: TransactionResult[];
}

export interface WalletData {
    balance: string
    transactions: TransactionResult[] // You can define a more specific type for transactions if needed
}
  