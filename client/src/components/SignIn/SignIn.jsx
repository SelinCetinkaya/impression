import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useCurrentUserStore } from "../../stores/currentUserStore";
import { useHistory, Link } from "react-router-dom";

function SignIn(props) {
  const [form, setForm] = useState({});
  const { login } = useCurrentUserStore();
  const history = useHistory();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const handleFormChange = ({ key, val }) => {
    setForm({ ...form, [key]: val });
  };

  const handleLoginClicked = async () => {
    const user = await login(form);
    if (user && user.id) {
      history.push("/posts");
    }
  };

  return (
    <div>
      <Form {...layout} name="basic">
        <Form.Item
          label="Username"
          name="username"
          onChange={(e) => {
            handleFormChange({ key: "username", val: e.target.value });
          }}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          onChange={(e) => {
            handleFormChange({ key: "password", val: e.target.value });
          }}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            className="pink-button"
            type="primary"
            htmlType="submit"
            onClick={handleLoginClicked}
          >
            Log in
          </Button>
          <Link to="/register">
            <Button className="link-button" type="link" htmlType="button">
              Sign up
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignIn;
