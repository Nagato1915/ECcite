import { createSelector } from 'reselect';

const productsSelector = (state) => state.products;

export const getProducts = createSelector(
  [productsSelector],
  state => state.list
);

export const getFeaturedProducts = createSelector(
  [productsSelector],
  state => state.list.slice(0, 5)
)