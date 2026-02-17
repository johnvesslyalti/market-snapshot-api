import redis from "./redis.js";

class RedisCache {

    async set(key: string, value: any, ttlSeconds: number) {
        await redis.set(key, JSON.stringify(value), "EX", ttlSeconds);
    }

    async get<T>(key: string): Promise<T | null> {
        const data = await redis.get(key);
        if (!data) return null;
        return JSON.parse(data);
    }
}

export default new RedisCache();
