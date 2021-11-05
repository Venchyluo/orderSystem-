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
import Beverage from "./Beverage";
import PhoneOrder from "./PhoneOrder";
import DeliveryOrder from "./DeliveryOrder";
import Chicken from "./Chicken";
import Receipt from "./Receipt";

export default function MainOrderOfFood(props) {
  return (
    <div>
      <Row>
        <Col span={5} offset={1}>
          <Button
            className="middleb"
            id="chicken"
            size="large"
            onClick={() => props.setCurrentPage("Chicken")}
          >
            Chicken111
          </Button>
        </Col>
        <Col span={5} offset={1}>
          <Button className="middleb" id="beef" size="large">
            Beef
          </Button>
        </Col>
        <Col span={5} offset={1}>
          <Button className="middleb" id="fish" size="large">
            Fish
          </Button>
        </Col>
        <Col span={5} offset={1}>
          <Button className="middleb" id="veg" size="large">
            Veg
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={5} offset={1}>
          <Button className="middleb" id="lunch" size="large">
            Lunch
          </Button>
        </Col>
        <Col span={5} offset={1}>
          <Button className="middleb" id="dinner" size="large">
            Dinner
          </Button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col span={5} offset={1}>
          <Button className="middleb" id="chicken" size="large">
            Special
          </Button>
        </Col>
        <Col span={5} offset={1}>
          <Button className="middleb" id="beef" size="large">
            Beverage
          </Button>
        </Col>
        <Col span={5} offset={1}>
          <Button className="middleb" id="fish" size="large">
            Family plan
          </Button>
        </Col>
      </Row>
    </div>
  );
}
