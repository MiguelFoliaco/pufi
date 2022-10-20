import React from 'react'
import { Product } from './Product'
import productListData from "../data/product.json";
import { getID } from '../../Shared/Service/IDs';
import "../less/ListProduct.less";

function ProductList() {

  return (
    <>
      <div className="list-content-product">

        {
          productListData.map(e => (
            <Product key={getID()} description={e.desc} image1={e.image1} image2={e.image2} title={e.name} />
          ))
        }
      </div>
    </>
  )
}

export default ProductList