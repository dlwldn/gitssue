export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : defaultValue;
  },
  set: <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};
