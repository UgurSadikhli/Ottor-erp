import { MemoryCache } from "memory-cache-node";

const inMemory = new MemoryCache<string, string>(600, 1000000);

export default inMemory;
