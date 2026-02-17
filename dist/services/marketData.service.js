import axios from "axios";
const API_KEY = process.env.ALPHA_VANTAGE_KEY;
export const fetchMarketData = async (ticker) => {
    const response = await axios.get("https://www.alphavantage.co/query", {
        params: {
            function: "GLOBAL_QUOTE",
            symbol: ticker,
            apikey: API_KEY,
        },
        timeout: 1500 // ✅ latency protection
    });
    const quote = response.data["Global Quote"];
    if (!quote || !quote["05. price"]) {
        throw new Error("Invalid ticker");
    }
    return {
        price: parseFloat(quote["05. price"]),
        changePercent: parseFloat(quote["10. change percent"].replace("%", "")),
    };
};
