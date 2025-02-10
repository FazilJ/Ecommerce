import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum'; // Adjust the path based on your actual folder structure
import Product_Display from '../Components/Product_Display/Product_Display'; // Adjust the path based on your actual folder structure
import { ShoppingContext } from '../Context/Shopping_Context'; // Assuming you have a ShoppingContext for all_product
import Discription_Box from '../Components/Discription_Box/Discription_Box';
import Related_Products from '../Components/Related_Products/Related_Products';
import ThemeToggleButton from '../Components/ThemeToggleButton';

const Product = () => {
  const { all_product } = useContext(ShoppingContext);
  const { productId } = useParams();

  // Find the product with matching productId
  const product = all_product.find((item) => item.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ThemeToggleButton />
      <Breadcrum product={product} />
      <Product_Display product={product} />
      <Discription_Box/>
      <Related_Products/>
    </div>
  );
};

export default Product;
