export interface MarketData {
    price: number;
    changePercent: number;
}

export interface Reasoning {
    thesis: string;
    risk: string;
}

export interface SnapshotResponse {
    meta: {
        ticker: string;
        timestamp: string;
    };
    data: MarketData;
    reasoning: Reasoning;
}