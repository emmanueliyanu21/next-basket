import { SingleProduct } from "@/types/Product";

interface CommonItem {
    id: number;
    price: number;
    thumbnail: string;
    title: string;
    quantity?: number;
    stock?: number
  }

export const dataKeys = {
    cart: "cart",
    wishList: "wishhList"
}

const formatPrice = (price: number) => {
    return price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const getLocalStorageItems = <T extends CommonItem>(key: string): T[] => {
    if (typeof window !== "undefined") {
      const data = window?.localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } else {
      return [];
    }
  };
  
  const saveLocalStorageItems = <T extends CommonItem>(key: string, items: T[]) => {
    if (typeof window !== "undefined") {
      window?.localStorage.setItem(key, JSON.stringify(items));
    }
  };
  
  const findItemById = <T extends CommonItem>(items: T[], itemId: number): T | undefined => {
    return items.find(item => item.id === itemId);
  };
  
  const updateQuantityInItems = <T extends CommonItem>(type: string, itemId: number, count: -1 | 1): T[] => {
    const items: T[] = getLocalStorageItems(type)
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, quantity: (item.quantity || 0) + count } : item
    );
    saveLocalStorageItems(type === dataKeys.cart ? dataKeys.cart : dataKeys.wishList, updatedItems);
    return updatedItems;
  };
  
  const addItemToItems = <T extends CommonItem>(type: string, item: SingleProduct): T[] => {
    const items: T[] = getLocalStorageItems(type)
    const { id, price, thumbnail, title, stock } = item;
    const existingItem = findItemById(items, id);
  
    if (!existingItem) {
      const newItem = { id, price, thumbnail, title, quantity: 1, ...(stock && { stock }) } as T;
      const updatedItems = [...items, newItem];
      saveLocalStorageItems(type === dataKeys.cart ? dataKeys.cart : dataKeys.wishList, updatedItems);
      return updatedItems;
    }
  
    return items;
  };
  
  const removeItemFromItems = <T extends CommonItem>(type: string, itemId: number): T[] => {
    const items: T[] = getLocalStorageItems(type)
    const updatedItems = items.filter(item => item.id !== itemId);
    saveLocalStorageItems(type === dataKeys.cart ? dataKeys.cart : dataKeys.wishList, updatedItems);
    return updatedItems;
  };
  
export { formatPrice, removeItemFromItems, addItemToItems, updateQuantityInItems, getLocalStorageItems,  }