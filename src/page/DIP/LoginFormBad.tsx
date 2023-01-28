import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';

export default (props: { type: '1' | '2' }) => {
  const handleAxios1 = (values: any) => {
    axios.post("http://localhost:8000/", values).then(res => {
      window.open('https://www.jd.com/')
    })
  }
  const handleAxios2 = (values: any) => {
    axios.post("http://localhost:8000/", values).then(res => {
      window.open('https://www.baidu.com/')
    })
  }
  const onFinish = (values: any) => {
    if (props.type === '1') {
      handleAxios1(values)
    }
    if (props.type === '2') {
      handleAxios2(values);
    }
  };
  return <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="用户名"
      name="username"
      rules={[{ required: true, message: '请输入用户名' }]}
    >
      <Input placeholder='请输入用户名' />
    </Form.Item>
    <Form.Item
      label="密码"
      name="password"
      rules={[{ required: true, message: '请输入密码' }]}
    >
      <Input.Password placeholder='请输入密码' />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
}
