import React, { useRef } from "react";
import {
  Tabs,
  Row,
  Col,
  Input,
  Button,
  Divider,
  Card,
  Form,
  InputNumber,
} from "antd";
// import "../order.css";
// import { DownloadOutlined } from "@ant-design/icons";
// import Beverage from "./Beverage";
// import PhoneOrder from "./PhoneOrder";
// import DeliveryOrder from "./DeliveryOrder";
import DeatailMenuOfAllFood from "./DeatailMenuOfAllFood";
import Receipt from "./Receipt";
import MainOrderOfFood from "./MainOrderOfFood";
import { useReactToPrint } from "react-to-print";
import TestForPrint from "../TestForPrint";

export default function MainOrder() {
  const [currentPage, setCurrentPage] = React.useState("MainOrder");
  // foodName to [unit price, counts]
  const [receipt, setReceipt] = React.useState(new Map());
  const [menu, setMenu] = React.useState(new Map());
  const { TextArea } = Input;
  const { TabPane } = Tabs;
  const { Meta } = Card;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");

  // console.log("menu in MainOrder : ", menu);
  // operation: 1 for adding, -1 for deleting
  function updateReceipt(foodName, price, operation) {
    let updatedReceipt = new Map(receipt);

    if (updatedReceipt.has(foodName)) {
      updatedReceipt.set(foodName, [
        price,
        updatedReceipt.get(foodName)[1] + operation,
      ]);
      if (updatedReceipt.get(foodName)[1] === 0) {
        updatedReceipt.delete(foodName);
      }
    } else {
      updatedReceipt.set(foodName, [price, 1]);
    }
    console.log("receipt in MainOrder: ", updatedReceipt);
    setReceipt(updatedReceipt);
  }

  function updateMenu(map) {
    setMenu(map);
  }

  function showPage() {
    if (currentPage === "MainOrder") {
      return (
        <MainOrderOfFood
          setCurrentPage={setCurrentPage}
          updateMenu={updateMenu}
        ></MainOrderOfFood>
      );
    } else if (currentPage === "DeatailMenuOfAllFood") {
      return (
        <DeatailMenuOfAllFood
          setCurrentPage={setCurrentPage}
          updateReceipt={updateReceipt}
          menu={menu}
        ></DeatailMenuOfAllFood>
      );
    }
  }
  function callback(key) {
    console.log(key);
  }

  const [form] = Form.useForm();
  const onSubmit = (values) => {
    console.log(values);
    if (values.phoneNumber) {
      setPhoneNumber(values.phoneNumber);
    }
    if (values.address) {
      setAddress(values.address);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Row>
      <Col span={8}>
        <Form form={form} name="control-hooks" onFinish={onSubmit}>
          <Form.Item name="phoneNumber" label="phoneNumber">
            <Input />
          </Form.Item>
          <Form.Item name="address" label="address">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
        <Divider orientation="left"></Divider>
        <Receipt
          receipt={receipt}
          updateReceipt={updateReceipt}
          ref={componentRef}
          phoneNumber={phoneNumber}
          address={address}
        ></Receipt>
        <Button onClick={handlePrint}>Print this out!</Button>
      </Col>
      <Col span={3}></Col>
      <Col span={13}>{showPage()}</Col>
    </Row>
  );
}
