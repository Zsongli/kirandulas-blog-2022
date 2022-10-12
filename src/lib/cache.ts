/* eslint-disable @typescript-eslint/no-non-null-assertion */
export default class Cache<K, V> {

    private data: Map<K, V>;

    /**@param maxSize The allowed maximum size of the cache in bytes, negative numbers indicate not being limited to a maximum size. */
    constructor(private getValueSize: (value: V) => number, private maxSize: number = -1) {
        this.data = new Map<K, V>();
    }

    public getSize(): number {
        return Array.from(this.data.values()).reduce((total, value) => total + this.getValueSize(value), 0);
    }

    public has(key: K): boolean {
        return this.data.has(key);
    }

    public get(key: K): V | undefined {
        return this.data.get(key);
    }

    public set(key: K, value: V): void {
        if (this.maxSize >= 0 && this.getValueSize(value) + this.getSize() > this.maxSize) {
            const sortedKeys = Array.from(this.data.keys()).sort((a, b) => this.getValueSize(this.data.get(a)!) - this.getValueSize(this.data.get(b)!));
            while (this.getSize() + this.getValueSize(value) > this.maxSize) {
                const key = sortedKeys.shift();
                if(!key) throw new Error(`Value is too large to fit in cache with a maximum size of ${this.maxSize} bytes.`);
                this.data.delete(key);
            }
        }

        this.data.set(key, value);
    }
}