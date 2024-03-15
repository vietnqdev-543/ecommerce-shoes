import React from 'react'
import './Home.scss'
import img1 from '../../assets/imageSlider/img1.png'
import img2 from '../../assets/imageSlider/img2.jpg'
import img3 from '../../assets/imageSlider/img3.jpg'
import img4 from '../../assets/imageSlider/img4.jpg'
import img5 from '../../assets/imageSlider/img5.jpg'
import { Image , Row ,Col } from 'antd'
import SliderComponents from '../../components/SliderComponent/SliderComponents'
import CartProduct from '../../components/CartProductComponent/CartProduct'

const HomePage = () => {
  
  return (
    <div className='home-container'>
  
    <div className='slider'>
      <div className="slide1 item "> <SliderComponents  arrImg={[img1 , img2 ,img3]}/></div>
      <div className="slide2 item"><Image className='image' src={img4} preview={false}></Image></div>
      <div className="slide3 item"><Image className='image' src={img5 } preview={false}></Image></div>     
    </div>

    <div style={{paddingTop:'30px'}}>    
      <Row gutter={12}>
      <Col span={6} className='item'>
      <Image preview={false} src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2024/february/240205-fl-categories-category-4up-mens.jpg'></Image>  
      <h3 style={{textAlign:'center',paddingTop:10}}>Men</h3>
      </Col>
      <Col span={6} className='item'>
      <Image preview={false} src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2024/february/240205-fl-categories-category-4up-womens.jpg'></Image>  
      <h3 style={{textAlign:'center',paddingTop:10}}>Woman</h3>
      </Col>
      <Col span={6} className='item'>
      <Image preview={false} src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2024/february/240205-fl-categories-category-4up-kids.jpg'></Image> 
      <h3 style={{textAlign:'center',paddingTop:10}}>Kid</h3>
      </Col>
      <Col span={6} className='item'>
      <Image preview={false} src='https://images.footlocker.com/content/dam/final/footlocker/site/homepage/2024/february/240205-fl-categories-category-4up-new-arrivals.jpg'></Image>  
      <h3 style={{textAlign:'center',paddingTop:10}}>Trending</h3>
      </Col>

      </Row>
    </div>

    <div>

    </div>


    </div>
  )
}

export default HomePage