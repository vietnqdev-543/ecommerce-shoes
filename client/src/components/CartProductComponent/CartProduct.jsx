
import React from 'react';
import { Card , Col ,Row} from 'antd';
const { Meta } = Card;
import './style.scss'
const CartProduct = () => {

    return (
        <div style={{display:'flex' , gap:'10px', marginBottom:'20px'}}>
          <Col className="gutter-row" span={6}>
          <Card
                hoverable
                style={{
                    width: 340,
                }}
                cover={<img alt="example" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png" />}
            >
              <div className="name-style">Nike AirForce 1</div>
              <div style={{display:'flex' , justifyContent:'space-between' , marginTop:'5px'}}>
                <span className='brand'>Nike</span>
                <span className='price'>1.200.000 vnd </span>
              </div>
            </Card>
          </Col>
        </div>
    )
}

export default CartProduct