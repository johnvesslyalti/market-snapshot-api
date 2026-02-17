import { fetchMarketData } from "../services/marketData.service.js";
import { buildReasoning } from "../services/reasoning.service.js";
import cache from "../utils/cache.js";
export const getSnapshot = async (req, res) => {
    const ticker = req.query.ticker;
    if (!ticker) {
        return res.status(400).json({
            error: "Ticker is required"
        });
    }
    const cacheKey = `snapshot:${ticker}`;
    try {
        // ✅ Cache-Aside Pattern
        const cached = await cache.get(cacheKey);
        if (cached) {
            console.log("⚡ Cache hit");
            return res.json(cached);
        }
        console.log("🐢 Cache miss");
        const marketData = await fetchMarketData(ticker);
        const reasoning = buildReasoning(marketData.changePercent);
        const response = {
            meta: {
                ticker: ticker.toUpperCase(),
                timestamp: new Date().toISOString(),
            },
            data: marketData,
            reasoning,
        };
        await cache.set(cacheKey, response, 10);
        res.json(response);
    }
    catch (err) {
        console.error(err.message);
        res.status(503).json({
            error: "Market data unavailable"
        });
    }
};
