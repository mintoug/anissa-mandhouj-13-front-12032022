const getLocalStorageKey = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
console.log(stored);
    if (!stored) {
        return defaultValue;
    }
    return JSON.parse(stored);
}

export default getLocalStorageKey;
