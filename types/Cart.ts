export interface CartItem {
    id: number;
    price: number;
    quantity: number;
    thumbnail: string;
    title: string,
    stock?: number
  }
  
  export interface CartOpen {
    isOpen: boolean
  }

  type IsVisibleType = {
    status: boolean,
    key: string
  }

  export interface CartState {
    isVisible: IsVisibleType;
    items: CartItem[];
  }