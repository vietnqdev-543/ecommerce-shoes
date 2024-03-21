
import './style.scss'
import { Col, Row, Switch, Avatar, Dropdown, message } from 'antd'
import { UserOutlined,} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { FaCaretDown } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { callLogout } from '../../../services/api';
import { doLogoutAction } from '../../../redux/account/accountSlice';



const HeaderAdmin = ({ theme, changeTheme }) => {
  const items = [
    {
      key: '1',
      label: (
        <a onClick={()=> navigate("/")}  rel="noopener noreferrer" href="#">
          Trang chủ
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a onClick={()=>handleLogout()} rel="noopener noreferrer" href="#">
          Đăng xuất
        </a>
      ),
    },
  ]

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userName = useSelector(state => state.account.user.name)

  const handleLogout = async() => {
    const res = await callLogout()
    console.log(res)
    dispatch(doLogoutAction())
    if(res){
      navigate('/login')
      message.success('Đăng xuất thành công')
    }else{
      message.error('Đã có lỗi xảy ra , vui lòng thử lại')
    }
  }

  return (
    <div>
      <Row className="container">
        <Col span={4} className="header-aside">
          <h1 className='logo'>WatchBox</h1>
        </Col>
        <Col span={20} className="header-content">



            <div style={{padding:'0 6px'}}>
              <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren={<FaMoon />}
                unCheckedChildren={<FaSun />}
              />
            </div>
          <div className="avatar">
            <Avatar size='default' src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' icon={<UserOutlined />} />
          </div>
          <Dropdown
            menu={{items}}
          >
            <a onClick={(e) => e.preventDefault()}>
              <div className="userName">
                {userName}
                <span style={{ fontSize: 20, paddingTop: 5 }}> <FaCaretDown /> </span>
              </div>
            </a>
          </Dropdown>


        </Col>
      </Row>
    </div>
  )
}

export default HeaderAdmin