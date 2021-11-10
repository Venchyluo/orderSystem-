import React from "react";
import { Tabs, Row, Col, Input, Button, Divider, Card } from "antd";
// import "../order.css";
// import { DownloadOutlined } from "@ant-design/icons";
// import Beverage from "./Beverage";
// import PhoneOrder from "./PhoneOrder";
// import DeliveryOrder from "./DeliveryOrder";
import DeatailMenuOfAllFood from "./DeatailMenuOfAllFood";
import Receipt from "./Receipt";
import MainOrderOfFood from "./MainOrderOfFood";
import Beef from "./Beef";

export default function MainOrder() {
  const [currentPage, setCurrentPage] = React.useState("MainOrder");
  // foodName to [unit price, counts]
  const [receipt, setReceipt] = React.useState(new Map());
  const [menu, setMenu] = React.useState(new Map());
  const { TextArea } = Input;
  const { TabPane } = Tabs;
  const { Meta } = Card;

  console.log("menu in MainOrder : ", menu);

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

  return (
    <Row>
      <Col span={8}>
        <Tabs type="card">
          <TabPane tab="Phone Order" key="1">
            <Input placeholder="Phone Number" />
          </TabPane>
          <TabPane tab="Delivery Order" key="2">
            <Input placeholder="Phone Number" />
            <TextArea rows={3} placeholder="Address" />
          </TabPane>
        </Tabs>
        <Row>
          <Col span={12}>
            <Button type="primary">Submit</Button>
          </Col>
          <Col span={12}>
            <Button type="danger">Reset</Button>
          </Col>
        </Row>

        <Divider orientation="left"></Divider>

        <Receipt receipt={receipt} updateReceipt={updateReceipt}></Receipt>
        <Button className="middleb">Print</Button>
      </Col>
      <Col span={3}></Col>
      <Col span={13}>{showPage()}</Col>
    </Row>
  );
}
