import React from 'react';
import { useFliterContaxt } from '../Contaxt/FilterContaxt';
import { useProduductContext } from "../Contaxt/ProductContext";
import Loading from './Loading';
import ListView from './ListView';
import GridView from './GridView';

const ProductList = ({ product }) => {

  const { Grid_View, Not_Found } = useFliterContaxt();
  const { isError, isLoaging } = useProduductContext();

  if (isLoaging) {
    return <Loading loadMsg="Loaging....." />
  } else if (isError) {
    return <Loading loadMsg="No Connection" />   
  } else if (Not_Found) {
    return <Loading loadMsg="Product Not Found..." />
  } else if (Grid_View) {
    return (
      <GridView product={product} />
    )
  } else {
    return <ListView product={product} />
  }

}
export default ProductList