import { Redis } from "ioredis";

const redis = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: parseInt(process.env.REDIS_PORT || "6379"),
    retryStrategy(times: number) {
        return Math.min(times * 50, 2000);
    },
});

redis.on("connect", () => {
    console.log("✅ Redis connected");
});

redis.on("error", (err: Error) => {
    console.error("❌ Redis error:", err.message);
});

export default redis;
