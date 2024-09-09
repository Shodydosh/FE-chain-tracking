export interface Transaction {
    blockNum: string;
    uniqueId: string;
    hash: string;
    from: string;
    to: string;
    value: number;
    erc721TokenId: string | null;
    erc1155Metadata: any | null;
    tokenId: string | null;
    asset: string;
    category: string;
    rawContract: {
        value: string;
        address: string;
        decimal: string;
    };
}

export interface getTransactionsResponse {
    transfers: Transaction[];
}