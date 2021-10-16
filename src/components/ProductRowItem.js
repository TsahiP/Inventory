import React from 'react';
import { useState } from 'react/cjs/react.development';
import Calculations from '../constants/Calculations';

const ProductRowItem = ({ data }) => {
  const [inputSizes, setInputSizes] = useState({
    params: {
      kg: 0,
      unit: 0,
      box: 0,
      third: 0,
      dThird: 0,
      boxDough: 0,
      ambat: 0,
    },
  });
  const { product, supplier, inStock, sizes, calculations, insertOrder } = data;

  const handleChange = e => {
    setInputSizes({
      params: { ...inputSizes.params, [e.target.name]: e.target.value },
    });
    console.log(e.target.name);
    console.log(sizes);
    Calculations.calculateTotalInStock(inputSizes.params, sizes);
    console.log(inputSizes.params);
    inStock.totalInStock = inputSizes.params.totalInStock;
    // let isEmpty = Object.values(inputSizes.params).every(size => size > 0);
    // console.log(isEmpty);
    // if (isEmpty) {
    //   Calculations.calculateTotalInStock(inStock, inputSizes.params);
    // }
  };
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
          <input
            type='number'
            value={inputSizes.params.kg}
            name='kg'
            onChange={e => handleChange(e)}
          />
        </div>
      </td>
      <td data-label='unit'>
        <div className='ui input' style={{ width: 75 }}>
          <input
            type='number'
            name='unit'
            value={inputSizes.params.unit}
            onChange={e => handleChange(e)}
          />
        </div>
      </td>
      <td data-label='box'>
        <div className='ui input' style={{ width: 75 }}>
          <input
            type='number'
            name='box'
            value={inputSizes.params.box}
            onChange={e => handleChange(e)}
          />
        </div>
      </td>
      <td data-label='third'>
        <div className='ui input' style={{ width: 75 }}>
          <input
            type='number'
            name='third'
            value={inputSizes.params.third}
            onChange={e => handleChange(e)}
          />
        </div>
      </td>
      <td data-label='dThird'>
        <div className='ui input' style={{ width: 75 }}>
          <input
            type='number'
            name='dThird'
            value={inputSizes.params.dThird}
            onChange={e => handleChange(e)}
          />
        </div>
      </td>
      <td data-label='boxDough'>
        <div className='ui input' style={{ width: 75 }}>
          <input
            value={inputSizes.params.boxDough}
            type='number'
            name='boxDough'
            onChange={e => handleChange(e)}
          />
        </div>
      </td>
      <td data-label='ambat'>
        <div className='ui input' style={{ width: 75 }}>
          <input
            type='number'
            value={inputSizes.params.ambat}
            name='ambat'
            onChange={e => handleChange(e)}
          />
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
