import { Button,  Form, Input , message ,Row , Col } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { callLogin } from '../../services/api';
import "./style.scss"
import { doLoginAction } from '../../redux/account/accountSlice';
const LoginPage = () => {
  const navigate = useNavigate()
  const [isSubmit , setIsSubmit] = useState(false)
  const dispatch = useDispatch()

  const onFinish = async (values) => {
    const { email, password } = values;
    // setIsSubmit(true);
    const res = await callLogin(email, password);
    // setIsSubmit(false);
    console.log('res:', res);
    console.log(res && res.data.data);

    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
    const isEmailValid = emailRegex.test(email); 

    if (res?.data.data) {
        localStorage.setItem('access_token', res.data.access_token);
        console.log('access_token : ', res.data.access_token);
        dispatch(doLoginAction(res.data.data));
        message.success('Đăng nhập thành công');
        navigate('/');
        console.log('Success:', values);
    } else if (!isEmailValid) { 
        message.error('Email không đúng định dạng');
    } else {
        message.error('Email hoặc mật khẩu không đúng');
    }
};
  return (
    <Row >
     <div className="form-login">
      
    <Col xs={24} sm={16} md={10} lg={8} xl={8} xxl={8} >
    <div className="form">
        <Form
          name="basic"
          className='form-body'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
        <h1 style={{fontSize: '35px' , textAlign : 'center' , marginBottom: '20px'}}>USER LOGIN</h1>
          <Form.Item
            name="email" 
            className='form-item'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email!',
              },
            ]}
          >
            <Input className='form-input'  placeholder='Username / Email'/>
          </Form.Item>

          <Form.Item
            name="password"
            className='form-item'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập password!',
              },
            ]}
          >
            <Input.Password className='form-input' placeholder='Password'  />
          </Form.Item>  
         <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 24,
                        }}
                    >
                        <Button className='form-button' type="primary" htmlType="submit" loading={isSubmit} >
                            Submit
                        </Button>
                    </Form.Item>
          <hr />
          <div className="form-link">
          <span>Chưa có tài khoản ? <Link to={"/register"}>Đăng ký</Link>  </span>
          </div>
        </Form>
      </div> 
    </Col>

  </div>
    </Row>
  )
}

export default LoginPage