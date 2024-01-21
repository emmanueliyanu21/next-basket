
export interface WishItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string;
  }
  
  export type WishActionTypes =
    | { type: 'ADD_TO_WISH'; payload: WishItem }
    | { type: 'REMOVE_ITEM'; payload: number } 
    | { type: 'INCREMENT_QUANTITY'; payload: number }
    | { type: 'DECREMENT_QUANTITY'; payload: number }
    | { type: 'OPEN_WISH_MODAL'; } 
    | { type: 'CLOSE_WISH_MODAL'; };

export interface WishState {
  isCartModalOpen: boolean;
  items: WishItem[];
}

const initialState: WishState = {
  isCartModalOpen: false,
  items: [],
};

const wishReducer = (state = initialState, action: WishActionTypes): WishState => {
  switch (action.type) {
    case 'ADD_TO_WISH':
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

    case 'OPEN_WISH_MODAL':
      return {
        ...state,
        isCartModalOpen: true,
      };

    case 'CLOSE_WISH_MODAL':
      return {
        ...state,
        isCartModalOpen: false,
      };

    default:
      return state;
  }
};

export default wishReducer;
