import React from 'react';

const ProductRowItem = ({ data }) => {
  const { product, supplier, inStock, sizes, calculations, insertOrder } = data;
  return (
    <tr>
      <td data-label='supplierName'>{supplier.name}</td>
      <td data-label='productName'>{product.name}</td>
      <td data-label='productPrice'>{product.price}</td>
      <td data-label='valueInSales'>{product.valueInSales}</td>
      <td data-label='stockDaily'>{sizes.stockDaily}</td>
      <td data-label='inOrder'>{sizes.inOrder}</td>
      <td data-label='kg'>
        <div className='ui input' style={{ width: 75 }}>
          <input type='number' />
        </div>
      </td>
      <td data-label='unit'>
        <div className='ui input' style={{ width: 75 }}>
          <input type='number' />
        </div>
      </td>
      <td data-label='box'>
        <div className='ui input' style={{ width: 75 }}>
          <input type='number' />
        </div>
      </td>
      <td data-label='third'>
        <div className='ui input' style={{ width: 100 }}>
          <input type='number' />
        </div>
      </td>
      <td data-label='dThird'>
        <div className='ui input' style={{ width: 75 }}>
          <input type='number' />
        </div>
      </td>
      <td data-label='boxDough'>
        <div className='ui input' style={{ width: 75 }}>
          <input type='number' />
        </div>
      </td>
      <td data-label='ambat'>
        <div className='ui input' style={{ width: 75 }}>
          <input type='number' />
        </div>
      </td>

      <td data-label='totalInStock'>{inStock.totalInStock}</td>
      <td data-label='outOfStock'>{calculations.outOfStock}</td>
      <td data-label='needToOrder'>{calculations.needToOrder}</td>
      <td data-label='insertOrder'>
        <div className='ui input' style={{ width: 75 }}>
          <input value={insertOrder} type='number' />
        </div>
      </td>
    </tr>
  );
};

export default ProductRowItem;
