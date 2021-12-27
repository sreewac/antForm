import React from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  InputNumber,
  Select,
  Switch,
  Upload,
  Slider,
  Radio,
  Rate,
} from "antd";
import { useForms } from "./useForm";

import { UploadOutlined } from "@ant-design/icons";

const FormAnt = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { getHook, prefixSelector } = useForms();

  const onFinish = (values) => {
    console.log("sucess", values);
    form.resetFields();
  };
  const onFinishFailed = (values) => {
    console.log("failed", values);
  };

  return (
    <div>
        <h1>Ant-design form</h1>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          label="E-mail"
          style={{ width: "400px" }}
          rules={[
            {
              type: "email",
              required: true,
              message: "Please enter  vaild email !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="password"
          style={{ width: "400px" }}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="DOB" label="DATE OF BIRTH">
          <DatePicker />
        </Form.Item>
        <Form.Item
          name={["age"]}
          label="Age"
          rules={[
            {
              required: true,
              message: "age must be between 0 to 99",
              type: "number",
              min: 0,
              max: 99,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="gender" allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="switch" label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item name="slider" label="Slider">
          <Slider
            marks={{
              0: "A",
              20: "B",
              40: "C",
              60: "D",
              80: "E",
              100: "F",
            }}
          />
        </Form.Item>
        <Form.Item name="color" label="color">
          <Radio.Group>
            <Radio value="red">red</Radio>
            <Radio value="blue">blue</Radio>
            <Radio value="yellow">yellow</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={getHook}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="rate" label="Rate">
          <Rate />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormAnt;
