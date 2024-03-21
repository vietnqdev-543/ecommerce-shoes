import "./style.scss"
import { Col, Row, Menu, Switch, } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import HeaderAdmin from "../AdminHeader/HeaderAdmin";
import { useState } from "react";
import { FaMoon , FaSun } from "react-icons/fa";
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
   
];

const LayoutAdmin = () => {
    const [theme, setTheme] = useState('dark');
    const [current, setCurrent] = useState('1');
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div className='container'>
            <div style={{width:'100%' ,height:'60px'}}>
            <HeaderAdmin theme={theme}  changeTheme={changeTheme}/>
            </div>
            <Row >
                <Col span={4} className='aside'>     
                        <Menu
                            theme={theme}
                            onClick={onClick}
                            style={{
                                width: '100%',
                                minHeight:'100vh'
                            }}
                            defaultOpenKeys={['sub1']}
                            selectedKeys={[current]}
                            mode="inline"
                            items={items}
                        />

                </Col>
                <Col span={20} className='content'>
                    

                </Col>
            </Row>
        </div>
    )
}

export default LayoutAdmin