import {  Button, Input, Form, Col, message} from 'antd'
import { useSelector } from 'react-redux'
import { callUpdateUser } from '../../services/api'
const UpdateInfo = ({ handleCloseModal }) => {
    const name = useSelector(state => state.account.user.name);
    const email = useSelector(state => state.account.user.email);
    const phone = useSelector(state => state.account.user.phone);
    const userID = useSelector(state => state.account.user._id);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const { userId, name, phone } = values;

        const res = await callUpdateUser(userId, name, phone);
        if (res && res.data && res.data.status === 'OK') {
            message.success('Cập nhật thông tin thành công');
            handleCloseModal();
        } else {
            message.error(res.data.message || 'Có lỗi xảy ra trong quá trình cập nhật');
        }
    };

    return (
        <div>
            <Form
                style={{ display: 'flex', width: '100%' }}
                form={form}
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
            >
                <div style={{ width: '100%' }}>
                    <Col span={24}>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            label="Id"
                            name="userId"
                            initialValue={userID} // Cung cấp giá trị mặc định
                            hidden
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            label="Email"
                            name="email"
                            initialValue={email}
                        >
                            <Input disabled />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please enter name' }]}
                            initialValue={name}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            labelCol={{ span: 24 }}
                            label="Phone Number"
                            name="phone"
                            rules={[{ required: true, message: 'Please enter phone number' }]}
                            initialValue={phone}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default UpdateInfo;



