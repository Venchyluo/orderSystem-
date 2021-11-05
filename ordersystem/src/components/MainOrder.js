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
import MainOrderOfFood from "./MainOrderOfFood";

export default function MainOrder() {
  const [currentPage, setCurrentPage] = React.useState("MainOrder");
  // food name to [unit price, counts]
  const [receipt, setReceipt] = React.useState(new Map());

  function updateReceipt(foodName, price) {
    let updatedReceipt = new Map();
    if (receipt.has(foodName)) {
      updatedReceipt.set(foodName, [price, receipt.get(foodName)[1] + 1]);
    } else {
      updatedReceipt.set(foodName, [price, 1]);
    }
    console.log("receipt in MainOrder: ", updatedReceipt);
    setReceipt(updatedReceipt);
  }

  function showPage() {
    if (currentPage === "MainOrder") {
      return (
        <MainOrderOfFood setCurrentPage={setCurrentPage}></MainOrderOfFood>
      );
    } else if (currentPage === "Chicken") {
      return (
        <Chicken
          setCurrentPage={setCurrentPage}
          updateReceipt={updateReceipt}
        ></Chicken>
      );
    }
  }

  return (
    <div>
      <Row>
        <Col span={6}>
          <Receipt receipt={receipt}></Receipt>
        </Col>
        <Col span={1}></Col>
        <Col span={17}>{showPage()}</Col>
      </Row>
    </div>
  );
}
