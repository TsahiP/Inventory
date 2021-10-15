import productsApi from '../apis/productsApi';

const handleGetProducts = async () => {
  const response = await productsApi.getProducts();

  if (!response.ok) return response.data;
  return response.data.products;
};

export default {
  handleGetProducts,
};
