const convertInStockValuesToFloat = object => {
  Object.entries(object).forEach(([key, value]) => {
    if (key !== 'totalInStock' && value !== '') object[key] = parseFloat(value);
  });
};

const calculateTotalInStock = (inStockValues, sizes) => {
  console.log(inStockValues, sizes);
  inStockValues.totalInStock = (
    inStockValues.kg * sizes.kg +
    inStockValues.box * sizes.box +
    inStockValues.unit * sizes.unit +
    inStockValues.third * sizes.third +
    inStockValues.dThird * sizes.dThird +
    inStockValues.boxDough * sizes.boxDough +
    inStockValues.ambat * sizes.ambat
  ).toFixed(2);
};

const calculateOrderInventoryValue = (totalInStock, salesValue) => {
  return (totalInStock * salesValue).toFixed(2);
};

const calculateMonthlyInventoryValue = (totalInStock, productPrice) => {
  return (totalInStock * productPrice).toFixed(2);
};

const calculateInventoryValueInSales = (EX_SALES, orderInventoryValue) => {
  return (orderInventoryValue - EX_SALES).toFixed(2);
};

const calculateNeedToOrder = (outOfStock, salesValue, inOrderValue) => {
  if (outOfStock < 0) {
    return -(outOfStock / salesValue / inOrderValue).toFixed(2);
  }
  return 0;
};

export default {
  convertInStockValuesToFloat,
  calculateTotalInStock,
  calculateOrderInventoryValue,
  calculateMonthlyInventoryValue,
  calculateInventoryValueInSales,
  calculateNeedToOrder,
};
