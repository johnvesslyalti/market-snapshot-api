import { get, set } from "./redis.js";
class RedisCache {
    async set(key, value, ttlSeconds) {
        await set(key, JSON.stringify(value), ttlSeconds);
    }
    async get(key) {
        const data = await get(key);
        if (!data)
            return null;
        // Upstash might return object if we didn't explicitly stringify, but we are stringifying in set.
        // If Upstash returns string, we parse. If it returns object (because it auto-parsed), checking typeof might be needed?
        // But get() in redis.ts returns Promise<string | null> because we typed it that way.
        // Does Upstash get<string>() work? Yes.
        return typeof data === 'string' ? JSON.parse(data) : data;
    }
}
export default new RedisCache();
