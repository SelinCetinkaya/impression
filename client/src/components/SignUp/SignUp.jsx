import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useCurrentUserStore } from "../../stores/currentUserStore";
import { useHistory, Link } from "react-router-dom";
import "./SignUp.css";

function SignUp(props) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const history = useHistory();
  const [form, setForm] = useState({});
  const { signUp } = useCurrentUserStore();

  const handleFormChange = ({ key, val }) => {
    setForm({ ...form, [key]: val });
  };

  const handleLoginClicked = async () => {
    const user = await signUp(form);
    if (user && user.id) {
      history.push("/posts");
    }
  };

  return (
    <div className="register-form">
      <h3>Sign up to start sharing</h3>
      <Form {...layout} name="basic">
        <Form.Item
          className="sign-up-input"
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input a username!" }]}
          onChange={(e) => {
            handleFormChange({ key: "username", val: e.target.value });
          }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="sign-up-input"
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          onChange={(e) => {
            handleFormChange({ key: "password", val: e.target.value });
          }}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          className="sign-up-input"
          label="Confirm password"
          name="confirm-password"
          rules={[{ required: true, message: "Please confirm your password!" }]}
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
            Sign up
          </Button>
          <Link to="/">
            <Button className="link-button" type="link" htmlType="button">
              Log in
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUp;
