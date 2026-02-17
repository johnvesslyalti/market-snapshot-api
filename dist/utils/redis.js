import { Redis } from "ioredis";
import { Redis as UpstashRedis } from "@upstash/redis";
const isUpstash = !!process.env.UPSTASH_REDIS_REST_URL;
let redis;
if (isUpstash) {
    console.log("Using Upstash Redis");
    redis = new UpstashRedis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
}
else {
    console.log("Using Local Redis (ioredis)");
    redis = new Redis({
        host: process.env.REDIS_HOST || "127.0.0.1",
        port: parseInt(process.env.REDIS_PORT || "6379"),
        retryStrategy(times) {
            return Math.min(times * 50, 2000);
        },
    });
    redis.on("connect", () => {
        console.log("✅ Redis connected");
    });
    redis.on("error", (err) => {
        console.error("❌ Redis error:", err.message);
    });
}
export const get = async (key) => {
    if (isUpstash) {
        return await redis.get(key);
    }
    else {
        return await redis.get(key);
    }
};
export const set = async (key, value, ttlSeconds) => {
    if (isUpstash) {
        // Upstash SDK handles JSON serialization if passed object, but here we expect string
        return await redis.set(key, value, { ex: ttlSeconds });
    }
    else {
        return await redis.set(key, value, "EX", ttlSeconds);
    }
};
export default redis;
