import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { isEmail, goodBuildAntd4FormValidator, isTelephone } from './utils/formValidate'

export default () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    form.validateFields().then(() => {
      message.success("校验通过")
    }).catch(() => {
      message.error("校验不通过")
    })
  }
  return <>
    <Form
      name="basic"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入电子邮箱!' },
          goodBuildAntd4FormValidator(isEmail, '电子邮箱不正确')
        ]}
      >
        <Input placeholder='请输入电子邮箱' />
      </Form.Item>
      <Form.Item
        label="11位电话号码"
        name="telephone"
        rules={[
          { required: true, message: '请输入11位电话号码!' },
          goodBuildAntd4FormValidator((value: string) => {
            return isTelephone(value);
          }, '11位电话号码不正确')
        ]}
      >
        <Input placeholder='请输入11位电话号码' />
      </Form.Item>
      <Form.Item
        label="url"
        name="url"
        rules={[
          { required: true, message: '请输入url!' },
          goodBuildAntd4FormValidator((value: string) => {
            return /http(s)?:\/\/[\w.]+[\w\/]*[\w.]*\??[\w=&\+\%]*/.test(value);
          }, 'url格式不正确')
        ]}
      >
        <Input placeholder='请输入url' />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          校验
        </Button>
      </Form.Item>
    </Form>
  </>
}