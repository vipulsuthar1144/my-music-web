import { useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("UseLocalStorage getValue :: " + key, error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("UseLocalStorage setValue :: " + key, error);
    }
  };

  const removeItem = (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(`UseLocalStorage useRemoveItemLs error ${error}`);
    }
  };

  return [storedValue, setValue, removeItem] as const;
};

export default useLocalStorage;
