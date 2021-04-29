import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";

import { currentUserStore } from "../../stores/currentUserStore";
import { postsStore } from "../../stores/postsStore";
import "./CreatePost.css";

function CreatePost(props) {
  const [form, setForm] = useState({});
  const { fetchPosts, addPost } = postsStore();
  const { currentUser } = currentUserStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleFormChange = ({ key, val }) => {
    setForm({ ...form, [key]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      ...form,
      user_id: currentUser.id,
    });
  };

  return (
    <div id="create-form-div">
      <Form id="create-form">
        <Form.Item
          label="Image URL"
          name="img_url"
          onChange={(e) => {
            handleFormChange({ key: "img_url", val: e.target.value });
          }}
          rules={[{ required: true, message: "Please input an image URL!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="content"
          onChange={(e) => {
            handleFormChange({ key: "caption", val: e.target.value });
          }}
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Create Post
        </Button>
      </Form>
    </div>
  );
}

export default CreatePost;
