import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

import { useCurrentUserStore } from "../../stores/currentUserStore";
import { usePostsStore } from "../../stores/postsStore";
import "./CreatePost.css";

function CreatePost(props) {
  const [form, setForm] = useState({});
  const { fetchPosts, addPost } = usePostsStore();
  const { currentUser } = useCurrentUserStore();
  const history = useHistory();

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
    history.push("/posts");
  };

  return (
    <div id="create-post-page">
      <h3>Create Post</h3>
      <div id="create-form-div">
        <Form id="create-form">
          <div id="img_url-input">
            Image URL:
            <Form.Item
              name="img_url"
              onChange={(e) => {
                handleFormChange({ key: "img_url", val: e.target.value });
              }}
              rules={[
                { required: true, message: "Please input an image URL!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div id="description-input">
            Description:
            <Form.Item
              name="content"
              onChange={(e) => {
                handleFormChange({ key: "content", val: e.target.value });
              }}
              rules={[{ required: false }]}
            >
              <Input.TextArea />
            </Form.Item>
          </div>
          <Button
            className="pink-button create-post-button"
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
          >
            Create Post
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CreatePost;
