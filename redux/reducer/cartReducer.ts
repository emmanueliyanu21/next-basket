// cartReducer.ts

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
  }
  
  // Define action types related to the cart
  export type CartActionTypes =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: number } // Assuming payload is the product ID
    | { type: 'INCREMENT_QUANTITY'; payload: number } // Assuming payload is the product ID
    | { type: 'DECREMENT_QUANTITY'; payload: number }
    | { type: 'OPEN_CART_MODAL'; } // Assuming payload is the product ID
    | { type: 'CLOSE_CART_MODAL'; };

export interface CartState {
  isCartModalOpen: boolean;
  items: CartItem[];
}

const initialState: CartState = {
  isCartModalOpen: false,
  items: [],
};

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding a product to the cart
      const existingProduct = state.items.find((item) => item.id === action.payload.id);

      if (existingProduct) {
        // If the product already exists in the cart, update its quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // If the product is not in the cart, add it with quantity 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case 'REMOVE_ITEM':
      // Handle removing a product from the cart
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case 'INCREMENT_QUANTITY':
      // Handle incrementing the quantity of a product
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      // Handle decrementing the quantity of a product
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ),
      };

    case 'OPEN_CART_MODAL':
      return {
        ...state,
        isCartModalOpen: true,
      };

    case 'CLOSE_CART_MODAL':
      return {
        ...state,
        isCartModalOpen: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
