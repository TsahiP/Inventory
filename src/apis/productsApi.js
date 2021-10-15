import clientApi from './clientApi';

const PRODUCTS_END_POINT = '/api/products';

const getProducts = () => {
  return clientApi.get(PRODUCTS_END_POINT);
};

export default { getProducts };

// const LABELS_END_POINTS = '/api/constants/labels';
// export const getLabels = () => {
//   return clientApi.get(LABELS_END_POINTS);
// };
