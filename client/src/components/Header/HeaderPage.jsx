import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { Input ,Button, Row , Col} from 'antd'
import { CiSearch } from "react-icons/ci";

const HeaderPage = () => {
  return (
  <div className='header-container'>   
        <Row style={{width:'100%' , display:'flex' , alignItems:'center'}}>
        <Col span={4}>
        <div>
          <Link className='header-logo' to={'/'}>Hyper Sneaker</Link>
        </div>
        </Col>

        <Col className="header-search" span={16}> 
          <Input  style={{borderRadius:0, width:'90%', padding:'7px 5px'}} placeholder='Search'/>
          <Button style={{borderRadius:0 , backgroundColor:'black', color:'white', height:'45px'}}> <span><CiSearch /></span></Button>
        </Col>
       <Col span={4}>
       <div className='header-nav-auth'>
           <Link className='header-nav-item' style={{fontWeight:'bold' , padding:'0 10px'}} to={'/login'}>Login </Link>
          <Link  className='header-nav-item' style={{border: '2px solid black' , padding:'7px 14px' , borderRadius:'20px', fontWeight:'bold'}} to={'/register'}>Register </Link>
        </div>
       </Col>
        </Row>
  </div>
  )
}

export default HeaderPage