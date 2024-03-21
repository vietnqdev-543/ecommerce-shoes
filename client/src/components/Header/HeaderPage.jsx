import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.scss'
import { Input, Button, Row, Col ,Dropdown, Space , Avatar, message} from 'antd'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux'
import { DownOutlined } from '@ant-design/icons';
import { FaRegCircleUser } from "react-icons/fa6";
import { callLogout } from '../../services/api';
import { doLogoutAction } from '../../redux/account/accountSlice';
import ModalUpdateProfile from '../ModalProfile/ModalUpdateProfile';
const HeaderPage = () => {
  const isAuthenticated = useSelector(state => state.account.isAuthenticated)
  const name = useSelector(state => state.account.user?.name)
  const isAdmin = useSelector(state => state.account.user.isAdmin)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isModalUpdateUserOpen , setIsModalUpdateUserOpen] = useState(false);
  const showModal = () =>{
    setIsModalUpdateUserOpen(true)
  }
  const handleCloseModalUpdateUser = () => {
    setIsModalUpdateUserOpen(false)
  }



  const handleLogout = async()=>{
    const res = await callLogout()
    dispatch(doLogoutAction())
    message.success('Log out successfully')    
  }

  const items = [
    isAdmin === true ? 
    {
      key: '1',
      label: (
        <a onClick={() => {navigate('/admin')}} rel="noopener noreferrer" href="#">
          Trang Admin
        </a>
      ),
    }
    : null,
    
    {
      key: '2',
      label: (
        <a onClick={showModal}  rel="noopener noreferrer" href="#">
          Thông tin tài khoản
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a onClick={handleLogout} rel="noopener noreferrer" href="#">
          Đăng xuất
        </a>
      ),
    },
  ];
  

  return (
    <div className='header-container'>
      <ModalUpdateProfile isModalUpdateUserOpen={isModalUpdateUserOpen} setIsModalUpdateUserOpen={setIsModalUpdateUserOpen}/>
      <Row style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <Col span={5}>
          <div>
            <Link className='header-logo' to={'/'}>WatchBox</Link>
          </div>
        </Col>

        <Col className="header-search" span={15}>
          <Input style={{ borderRadius: 0, width: '90%', padding: '7px 5px' }} placeholder='Search' />
          <Button style={{ borderRadius: 0, backgroundColor: 'black', color: 'white', height: '45px' }}> <span><CiSearch /></span></Button>
        </Col>
        <Col span={4}>
          <div className='header-nav-auth'>
            {isAuthenticated === true ?
              <div style={{display:'flex',alignItems:'center' ,justifyContent:'flex-end'}}>
                 <Avatar style={{display:'flex' ,alignItems:'center'}} size="large" icon={<FaRegCircleUser />} />
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <span style={{textTransform:'uppercase'}}>{name}</span>
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
              :
              <>
                <Link className='header-nav-item' style={{ fontWeight: 'bold', padding: '0 10px' }} to={'/login'}>Login</Link>
                <Link className='header-nav-item' style={{ border: '2px solid black', padding: '7px 14px', borderRadius: '20px', fontWeight: 'bold' }} to={'/register'}>Register</Link>
              </>
            }

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HeaderPage