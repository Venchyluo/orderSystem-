import React, { useState, useEffect } from "react";
import {
  Layout,
  Card,
  Row,
  Col,
  Form,
  Input,
  message,
  Button,
  Space,
} from "antd";
import "antd/dist/antd.css";

export default function PhoneOrder() {
  const [form] = Form.useForm();
  // const [phoneNumber, setPhoneNumber] = React.useState;

  // const getPhoneNumber = (number) => {
  //   setPhoneNumber(number);
  // };
  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onFill = () => {
    form.setFieldsValue({
      url: "https://taobao.com/",
    });
  };
  return (
    <Row>
      <Col span={8} offset={8}>
        <Form
          className="orderform"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <Form.Item
              name="Phone number"
              label="number"
              rules={[
                {
                  required: true,
                },
                {
                  type: "number",
                  min: 6,
                },
              ]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
          </div>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onFill}>
                Fill
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
