import React, { useState, useContext, useEffect } from 'react';
import ConstantsContext from '../context/ConstantsDataContext';
import productTemplate from '../constants/productTemplate';
import ProductRowItem from './ProductRowItem';
import Calculations from '../constants/Calculations';
import productService from '../services/productsService';

const MainTable = () => {
  const { constants } = useContext(ConstantsContext);
  const [products, setProducts] = useState([]);
  const handleClick = () => {
    console.log(products);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await productService.handleGetProducts();
    if (response.isError) {
    } else {
      setProducts(response);
    }
  };
  // useEffect(() => {
  //   setProducts([productTemplate]);
  // }, []);

  const calculateData = () => {
    Calculations.calculateTotalInStock(
      productTemplate.inStock,
      productTemplate.sizes
    );
    setProducts();
  };

  return (
    <div>
      <table className='ui celled table'>
        <thead>
          <tr>
            {constants &&
              constants.map((column, index) => {
                return <th key={index.toString()}>{column}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map(p => {
              return <ProductRowItem data={p} />;
            })}
        </tbody>
      </table>
      <input
        type='button'
        className='ui button'
        value='calc'
        onClick={() => handleClick()}
      />
    </div>
  );
};
export default MainTable;

// ui table input
/*
              <div className='ui input'>
                <input type='text' className='ui input'></input>
              </div>
              */
