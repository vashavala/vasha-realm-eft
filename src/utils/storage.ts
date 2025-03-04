const PREFIX = 'vasha-';
const processKey = (key: string) => PREFIX + key;
const serialize = <T>(value: T): string => JSON.stringify({ value, type: typeof value })
const deserialize = <T>(value: string): T | null => {
  try {
    const parsed = JSON.parse(value);
    return parsed.value as T;
  } catch (e) {
    console.error('Storage deserialize failed: ', e);
    return null;
  }
};
export const storage = {
  setItem: <T>(key: string, value: T): void => {
    try {
      const processedKey = processKey(key);
      const serializedValue = serialize(value);
      localStorage.setItem(processedKey, serializedValue);
    } catch (e) {
      console.error('Storage save failed: ', e);
    }
  },

  getItem: <T>(key: string): T | null => {
    try {
      const processedKey = processKey(key);
      const value = localStorage.getItem(processedKey);
      return value ? deserialize<T>(value) : null;
    } catch (e) {
      console.error('Storage read failed: ', e);
      return null;
    }
  },

  removeItem: (key: string): void => {
    try {
      const processedKey = processKey(key);
      localStorage.removeItem(processedKey);
    } catch (e) {
      console.error('Storage remove failed: ', e);
    }
  },

  clearAll: (): void => {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(PREFIX)) {
          localStorage.removeItem(key);
        }
      });
    } catch (e) {
      console.error('Storage clean failed: ', e);
    }
  }
};