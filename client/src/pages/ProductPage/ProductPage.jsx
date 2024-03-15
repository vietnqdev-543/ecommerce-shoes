import React from 'react'
import CartProduct from '../../components/CartProductComponent/CartProduct'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

const ProductPage = () => {
  return (
    <div style={{minHeight:"100vh"}}>
      <h1>This is the product page</h1>
      <CartProduct />
      {/* <ButtonComponent textButton={'submit'} /> */}
    </div>
  )
}

export default ProductPage