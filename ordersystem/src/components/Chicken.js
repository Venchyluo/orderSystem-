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

export default function Chicken(props) {
  return (
    <div className="row1">
      <Row>
        <Col span={4}>
          <Button
            className="middleb"
            size="large"
            id="chicken"
            onClick={() => {
              props.updateReceipt("Kungpao Chicken, Large", 10);
            }}
          >
            Kungpao Chicken, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            Mongolian Chicken, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            Orange Chicken, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            Sichuan Chicken, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            xx chicken, Large, $10
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            xx chicken, Large, $10
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            Kungpao Chicken, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            Mongolian Chicken, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            Orange Chicken, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            Sichuan Chicken, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            xx chicken, SMALL $5
          </Button>
        </Col>
        <Col span={4}>
          <Button className="middleb" size="large" id="chicken">
            xx chicken, SMALL $5
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={() => props.setCurrentPage("MainOrder")}>
            Back
          </Button>
        </Col>
      </Row>
    </div>
  );
}
