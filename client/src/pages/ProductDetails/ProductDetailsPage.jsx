import React from 'react'
import { Row ,Col ,Rate ,Button } from 'antd'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './style.scss'
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const ProductDetailsPage = () => {
  return (
    <div  style={{width:'100%',minHeight:'100vh'}}>
      <Row className='container'>
        <Col className='left' style={{minHeight:500 }} span={15}>
        <ImageGallery items={images} showPlayButton={false} //hide play button
                        showFullscreenButton={false} //hide fullscreen button
                        renderLeftNav={() => <></>} //left arrow === <> </>
                        renderRightNav={() => <></>}//right arrow === <> </>
                        slideOnThumbnailOver={true}  //onHover => auto scroll images
        />
        </Col>
        <Col className='right' style={{minHeight:500}} span={9}>
          <div className="brand">Casio</div>
          <div className="name">Citizen Tsuyosa NJ0154-80H – Nam – Kính Sapphire – Automatic (Tự Động) – Mặt Số 40mm, Trữ Cót 40 Giờ, Chống Nước 5ATM</div>
          <div style={{lineHeight:'2.1rem' ,fontSize:18}}>
            <div className="object">Đối tượng : Nam</div>
            <div className="idProduct">Mã số sản phẩm : MS01</div>
            <div className="size">kích cỡ : 40mm</div>
            <div className="material">Chất liệu : Kim loại</div>
            <div className="waterproof">Kháng nước : Có</div>
          </div>
          <div className="price">20.000.000 VNĐ</div>
          <Row gutter={12}>
          <Col span={12}>
            <button style={{width:'100%', padding:'14px 0' , border:'none', backgroundColor:'darkRed', color:'white', borderRadius:'3px'}}>Thêm vào giỏ hàng</button>
          </Col>
          <Col span={12}>
          <button style={{width:'100%', padding:'14px 0' , border:'none', backgroundColor:'darkblue', color:'white', borderRadius:'3px'}}>Mua ngay</button>
          </Col>

          </Row>
        </Col>
      </Row>
     

    </div>
  )
}

export default ProductDetailsPage