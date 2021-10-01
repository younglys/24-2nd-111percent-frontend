import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MainCarousel from './MainCarousel/MainCarousel';
import ProductList from './ProductList/ProductList';
import fetchData from '../../service/data-fetch';

const Main = props => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const data = new fetchData();
    data.listView().then(res => {
      setProducts(res.investments);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>111percent_%</title>
      </Helmet>
      {products && <MainCarousel items={products} />}
      {products && <ProductList items={products} />}
    </>
  );
};

export default Main;
