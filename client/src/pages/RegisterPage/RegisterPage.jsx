
import { Button, Checkbox, Col, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

const RegisterPage = () => {
    const navigate = useNavigate()
    const [isSubmit, setIsSubmit] = useState(false)

    const onFinish = async (values) => {
        const { fullName, email, password, phone } = values;
        setIsSubmit(true);
        const res = await callRegister(fullName, email, password, phone)
        console.log(res.data);
        setIsSubmit(false)
        if (res?.data?._id) {
            message.success("Register succesfully")
            navigate("/login")
        } else {
            message.error("Register fail")
        }
        console.log('Success:', values);
    };

    return (
        <div className='form-register'>
           <Col span={8}>
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
                    <h1>USER REGISTER</h1>
                    <Form.Item
                        label="Fullname"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullname!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 0,
                            span: 24,
                        }}
                    >
                        <Button type="primary" htmlType="submit" loading={isSubmit} >
                            Submit
                        </Button>
                    </Form.Item>
                    <hr />
                    <span>Đã có tài khoản ? <Link to={"/login"}>Đăng nhập</Link>  </span>
                </Form>
            </div>
           </Col>
        </div>
    )
};
export default RegisterPage;