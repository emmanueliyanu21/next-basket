// selectors.ts
import { createSelector } from 'reselect';
import { RootState } from '@/store/store';

const selectProductState = (state: RootState) => state.product;

export const selectBestSelling = createSelector(
  [selectProductState],
  (product) => product.bestSelling
);

export const selectLoading = createSelector(
  [selectProductState],
  (product) => product.loading
);

export const selectBestSellingWithLoading = createSelector(
  [selectBestSelling, selectLoading],
  (bestSelling, loading) => ({ bestSelling, loading })
);
