import React, { useState } from 'react';
import { Button, Modal , Tabs } from 'antd';
import ChangePassword from './ChangePassword';
import UpdateInfo from './UpdateInfo';
const ModalUpdateProfile = ({isModalUpdateUserOpen ,setIsModalUpdateUserOpen}) => {
  const handleCloseModal = () => {
    setIsModalUpdateUserOpen(false)
  }

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'Cập nhật thông tin ',
      children: <UpdateInfo handleCloseModal={handleCloseModal}/>,
    },
    {
      key: '2',
      label: 'Đổi mật khẩu',
      children: <ChangePassword />,
    },
  ];
  return (
    <div>
         <Modal width={'50%'} footer={null} title="Cập nhật thông tin tài khoản" open={isModalUpdateUserOpen} onOk={handleCloseModal} onCancel={handleCloseModal}>
         <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Modal>
    </div>
  )
}

export default ModalUpdateProfile