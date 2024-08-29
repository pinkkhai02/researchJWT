import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { createUserApi } from "../util/api";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { name, email, password } = values;
    const res = await createUserApi(name, email, password);
    // console.log("Success:", values);
    if (res) {
      notification.success({
        message: "Created user",
        description: "Success",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Created user",
        description: "Error",
      });
    }
  };
  return (
    <div style={{ margin: "60px" }}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your eamil!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
