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
import DetailMenuOfAllFood from "./DetailMenuOfAllFood";
import Receipt from "./Receipt";
import MainOrderOfFood from "./MainOrderOfFood";
import { useReactToPrint } from "react-to-print";
import { isParenthesizedExpression } from "@babel/types";

export default function MainOrder() {
  const [currentPage, setCurrentPage] = React.useState("MainOrder");
  // foodName to [unit price, counts]
  const [receipt, setReceipt] = React.useState(new Map());
  const [menu, setMenu] = React.useState(new Map());
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [addressShow, setAddressShow] = React.useState(false);
  const [deliveryCharge, setDeliveryCharge] = React.useState(0);

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
    } else if (currentPage === "DetailMenuOfAllFood") {
      return (
        <DetailMenuOfAllFood
          setCurrentPage={setCurrentPage}
          updateReceipt={updateReceipt}
          menu={menu}
        ></DetailMenuOfAllFood>
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
    } else {
      setPhoneNumber("");
    }
    if (values.address) {
      setAddress(values.address);
    } else {
      setAddress("");
    }
    if (values.deliveryCharge) {
      setDeliveryCharge(values.deliveryCharge);
    } else {
      setDeliveryCharge(0);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  const isPhoneOrder = () => {
    setAddressShow(!addressShow);
  };

  return (
    <Row>
      <Col span={8}>
        <Form form={form} name="control-hooks" onFinish={onSubmit}>
          <Form.Item>
            <Button htmlType="button" onClick={isPhoneOrder}>
              Phone / Delivery
            </Button>
          </Form.Item>
          <Form.Item name="phoneNumber" label="phoneNumber">
            <Input />
          </Form.Item>
          {addressShow ? (
            <Form.Item name="address" label="address">
              <Input />
            </Form.Item>
          ) : null}
          {addressShow ? (
            <Form.Item name="deliveryCharge" label="deliveryCharge">
              <Input />
            </Form.Item>
          ) : null}

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
          deliveryCharge={deliveryCharge}
          addressShow={addressShow}
          // delivertCharge={delivertCharge}
        ></Receipt>
        {/* show price after tax */}
        <Button onClick={handlePrint}>Print this out!</Button>
      </Col>
      <Col span={3}></Col>
      <Col span={13}>{showPage()}</Col>
    </Row>
  );
}
