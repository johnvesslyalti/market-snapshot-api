import { Reasoning } from "../types/snapshot.types.js";

export const buildReasoning = (
    changePercent: number
): Reasoning => {

    const thesis =
        changePercent > 0
            ? "Bullish momentum detected"
            : "Bearish pressure observed";

    const risk =
        Math.abs(changePercent) > 3
            ? "high"
            : "moderate";

    return { thesis, risk };
};