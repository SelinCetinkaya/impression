import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Input } from "antd";
import { usePostsStore } from "../../stores/postsStore";
import { useParams } from "react-router-dom";

function EditModal({ isEditModalVisible, setIsEditModalVisible }) {
  const { posts, editPost } = usePostsStore();
  const [form, setForm] = useState({});
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (posts.length) {
      const post = posts.find((post) => post.id === Number(id));
      setPost(post);
    }
  }, [posts, id]);

  const handleFormChange = ({ key, val }) => {
    setForm({ ...form, [key]: val });
  };

  const handleSubmit = () => {
    editPost({
      post,
      ...form,
    });
    setIsEditModalVisible(false);
  };

  const handleCancel = () => {
    setIsEditModalVisible(false);
  };

  if (!post.id) return <div></div>;

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isEditModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        <Form id="edit-form">
          <Form.Item
            label="Description"
            name="content"
            rules={[{ required: false }]}
            initialValue={post.content}
            onChange={(e) => {
              handleFormChange({ key: "content", val: e.target.value });
            }}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditModal;
