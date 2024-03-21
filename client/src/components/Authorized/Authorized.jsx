import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Authorized = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Result
    status="403"
    title="403"
    subTitle="Bạn không có quyền truy cập trang này"
    extra={<Button onClick={()=>navigate('/')} type="primary">Quay lại trang chủ</Button>}
  />
    </div>
  )
}

export default Authorized
