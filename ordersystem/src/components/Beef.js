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

export default function Beef() {
  return (
    <div className="row1">
      <Row>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            Kungpao Beef, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            Mongolian Beef, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            Orange Beef, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            Sichuan Beef, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            xx Beef, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            xx Beef, Large, $10
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            Kungpao Beef, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            Mongolian Beef, SMALL ¥5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            Orange Beef, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            Sichuan Beef, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            xx Beef, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="beef">
            xx Beef, SMALL $5
          </Button>
        </Col>
      </Row>
    </div>
  );
}
