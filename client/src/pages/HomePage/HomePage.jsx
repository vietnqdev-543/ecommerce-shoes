import React from 'react'
import './Home.scss'
import img1 from '../../assets/imageSlider/img1.png'
import img2 from '../../assets/imageSlider/img2.jpg'
import img3 from '../../assets/imageSlider/img3.jpg'
import img4 from '../../assets/imageSlider/img4.jpg'
import img5 from '../../assets/imageSlider/img5.jpg'
import { Image, Row, Col } from 'antd'
import SliderComponents from '../../components/SliderComponent/SliderComponents'
import CartProduct from '../../components/CartProductComponent/CartProduct'

const HomePage = () => {

  return (
    <div className='home-container'>

      <div className='slider'>
        <div className="slide1 item "> <SliderComponents arrImg={[img1, img2, img3]} /></div>
        <div className="slide2 item"><Image className='image' src={img4} preview={false}></Image></div>
        <div className="slide3 item"><Image className='image' src={img5} preview={false}></Image></div>
      </div>

      <div className='object' style={{ paddingTop: '30px' }}>
        <Row gutter={12}>
          <Col span={6} >
            <div  style={{ height: 250, width: '100%', backgroundColor: 'red' }}></div>
            <h3 style={{ textAlign: 'center', paddingTop: 10 }}>Nam</h3>
          </Col>
          <Col span={6} >
            <div style={{ height: 250, width: '100%', backgroundColor: 'red' }}></div>
            <h3 style={{ textAlign: 'center', paddingTop: 10 }}>Nữ</h3>
          </Col>
          <Col span={6} >
            <div style={{ height: 250, width: '100%', backgroundColor: 'red' }}></div>
            <h3 style={{ textAlign: 'center', paddingTop: 10 }}>Cặp đôi</h3>
          </Col>
          <Col span={6} >
            <div style={{ height: 250, width: '100%', backgroundColor: 'red' }}></div>
            <h3 style={{ textAlign: 'center', paddingTop: 10 }}>Trẻ em</h3>
          </Col>



        </Row>
      </div>







    </div>
  )
}

export default HomePage