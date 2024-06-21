export const useSetItemLS = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(`localStorage useSetItenLS error ${error}`);
  }
};

export const useGetItemLS = <T>(key: string): T | null => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log(`localStorage useGetItemLS error ${error}`);
    return null;
  }
};

export const useRemoveItemLS = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(`localStorage useRemoveItemLs error ${error}`);
  }
};

export const useClearLS = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.log(`localStorage useClearLs error ${error}`);
  }
};
