type AnyObject = Record<string, unknown>

export function toCamelCase<T>(obj: T): T {
    if (Array.isArray(obj)) {
        return obj.map(v => toCamelCase(v)) as unknown as T
    }

    if (obj !== null && typeof obj === 'object') {
        const result: AnyObject = {}
        for (const key in obj as AnyObject) {
            const camelKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase())
            result[camelKey] = toCamelCase((obj as AnyObject)[key])
        }
        return result as T
    }

    return obj
}

export function toSnakeCase<T>(obj: T): T {
    if (Array.isArray(obj)) {
        return obj.map(v => toSnakeCase(v)) as unknown as T
    }

    if (obj !== null && typeof obj === 'object') {
        const result: AnyObject = {}
        for (const key in obj as AnyObject) {
            const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
            result[snakeKey] = toSnakeCase((obj as AnyObject)[key])
        }
        return result as T
    }

    return obj
}

