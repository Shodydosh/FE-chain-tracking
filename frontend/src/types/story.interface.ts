export interface AssetDetail {
    asset: string;
    type: string;
}

export interface Event {
    time: string;
    description: string;
    victimsWallets?: AssetDetail[];
    suspect?: AssetDetail[];
    newBuyer?: AssetDetail[];
    vault?: AssetDetail[];
    nftMarketplace?: AssetDetail[];
    distributedSmartContract?: AssetDetail[];
}

export interface StoryTransaction {
    date: string;
    events: Event[];
}