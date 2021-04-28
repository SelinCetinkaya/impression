import React from "react";
// import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

function SignIn(props) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <div>
      <Form {...layout} name="basic">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <Button type="link" htmlType="button">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignIn;
