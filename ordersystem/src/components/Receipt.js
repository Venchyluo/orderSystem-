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
  Checkbox,
  Table,
} from "antd";
import "antd/dist/antd.css";
import "../order.css";
import { DownloadOutlined } from "@ant-design/icons";
import Beverage from "./Beverage";
import PhoneOrder from "./PhoneOrder";
import DeliveryOrder from "./DeliveryOrder";
import Chicken from "./Chicken";

export default function Receipt(props) {
  const [dataSource, setDataSource] = useState("");

  useEffect(() => {
    updateDataSource();
  }, [props]);

  function updateDataSource() {
    console.log("update dataSource");
    let id = 0;

    let newDataSource = [];

    props.receipt.forEach((value, key) => {
      newDataSource.push({
        key: id++,
        number: value[1],
        food: key,
        price: value[0] * value[1],
      });
    });

    setDataSource(newDataSource);
  }
  // food name to [unit price, counts]
  console.log("receipt: ", props.receipt);

  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Food",
      dataIndex: "food",
      key: "food",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  /*
  {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  */
  return <Table dataSource={dataSource} columns={columns} />;
}
