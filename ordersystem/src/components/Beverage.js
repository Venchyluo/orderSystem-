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
  Radio,
} from "antd";
import "antd/dist/antd.css";
import "../order.css";
import { DownloadOutlined } from "@ant-design/icons";

export default function Beverage() {
  return (
    <Row
      className="row1"
      // row-flex="space-between"
      // justify="center"
      // align="middle"
      // style={{ minHeight: "50vh" }}
    >
      <Col span={3} offset={1}>
        <Button className="middleb" size="large">
          Coke
        </Button>
      </Col>
      <Col span={3} offset={1}>
        <Button className="middleb" size="large">
          Coke
        </Button>
      </Col>
      <Col span={3} offset={1}>
        <Button className="middleb" size="large">
          Coke
        </Button>
      </Col>
      <Col span={3} offset={1}>
        <Button className="middleb" size="large">
          Coke
        </Button>
      </Col>
      <Col span={3} offset={1}>
        <Button className="middleb" size="large">
          Coke
        </Button>
      </Col>
      <Col span={3} offset={1}>
        <Button className="middleb" size="large">
          Coke
        </Button>
      </Col>
    </Row>
  );
}
