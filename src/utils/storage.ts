const PREFIX = 'vasha-';
const processKey = (key: string) =>
  key.startsWith(PREFIX) ? key : PREFIX + key;

export const storage = {
  setItem: <T>(key: string, value: T): T => {
    try {
      const processedKey = processKey(key);
      const serializedValue = JSON.stringify(value ?? null);
      localStorage.setItem(processedKey, serializedValue);
    } catch (e) {
      console.error('Storage save failed:', e);
    }
    return value;
  },

  getItem: <T>(key: string): T | null => {
    try {
      const processedKey = processKey(key);
      const value = localStorage.getItem(processedKey);
      return value !== null ? JSON.parse(value) as T : null;
    } catch (e) {
      console.error('Storage read failed:', e);
      return null;
    }
  },

  removeItem: (key: string): void => {
    try {
      const processedKey = processKey(key);
      localStorage.removeItem(processedKey);
    } catch (e) {
      console.error('Storage remove failed:', e);
    }
  },

  clearAll: (): void => {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(PREFIX)) localStorage.removeItem(key)
      });
    } catch (e) {
      console.error('Storage clean failed:', e);
    }
  }
};