
import { Button,  Col, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { callRegister } from '../../services/api';
import './style.scss'

const RegisterPage = () => {
    const navigate = useNavigate()
    const [isSubmit, setIsSubmit] = useState(false)

    const onFinish = async (values) => {
        const {  email, name ,  password , confirmPassword , phone } = values;
        // setIsSubmit(true);
        const res = await callRegister(name, email, password, confirmPassword , phone)
        console.log(res.data);
        // setIsSubmit(false)
        if (res && res.data) {
            message.success("Đăng ký tài khoản thành công")
            navigate("/login")
        } else {
            message.error("Đăng ký tài khoản thất bại")
        }
        console.log('Success:', values);
    };

    return (
        <div className='form-register'>
            
           <Col xs={24} sm={16} md={10} lg={8} xl={8} xxl={8}>
           <div className="form">
                <Form
                    className='form-body'
                    name="basic"
                    labelCol={{
                        span: 24,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <h1 className='title'>USER REGISTER</h1>

                    <Form.Item
                        // label="Email"
                        className='form-item'
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input className='form-input'  placeholder='Email'/>
                    </Form.Item>


                    <Form.Item
                        // label="Username"
                        className='form-item'
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullname!',
                            },
                        ]}
                    >
                        <Input className='form-input' placeholder='User name' />
                    </Form.Item>

                    <Form.Item
                        // label="Password"
                        className='form-item'
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password className='form-input' placeholder='Password'/>
                    </Form.Item>

                    <Form.Item
                        // label="Confirm Password"
                        className='form-item'
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your confirm password!',
                            },
                        ]}
                    >
                        <Input.Password  className='form-input' placeholder='Confirm Password'/>
                    </Form.Item>

                    <Form.Item
                        // label="Phone"
                        className='form-item'
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input className='form-input' placeholder='Number phone'/>
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
                    <div className='form-link'>
                        <span className='form-link'>Bạn đã có tài khoản ? <Link to={"/login"}>Đăng nhập</Link>  </span>
                    </div>
                </Form>
            </div>
           </Col>
        </div>
    )
};
export default RegisterPage;