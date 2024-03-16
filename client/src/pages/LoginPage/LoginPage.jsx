import { Button, Checkbox, Form, Input , message, notification ,Row , Col } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const LoginPage = () => {
  const navigate = useNavigate()
  const [isSubmit , setIsSubmit] = useState(false)
  const dispatch = useDispatch()

  const onFinish = async () => {
   
  };
  return (
    <Row style={{display:'flex', justifyContent:'center', }}>
      <Col span={8} >
      <div className="form-login">
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
            // label="Email"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input className='input-form'  placeholder='Username / Email'/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password className='input-form' placeholder='Password'  />
          </Form.Item>

         <Row>
         <Form.Item
         wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
              <Button  type="primary" htmlType="submit" loading={isSubmit} className='btn-submit'>
                LOGIN
              </Button>
          
          </Form.Item>
         </Row>
          <hr />
          <span>Chưa có tài khoản <Link to={"/register"}>Đăng ký</Link>  </span>
        </Form>
      </div> 
  </div>
      </Col>
    </Row>
  )
}

export default LoginPage