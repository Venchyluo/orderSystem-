import React, { useState, useEffect } from "react";
import { Row, Table, Space, Button, List, Divider, InputNumber } from "antd";
import ReactToPrint from "react-to-print";
// import "../order.css";
import DeliveryOrder from "./DeliveryOrder";

export const Receipt = React.forwardRef((props, ref) => {
  const [dataSource, setDataSource] = useState("");
  const [totalPrice, setTotalPrice] = React.useState(() => {});

  useEffect(() => {
    updateDataSource();
    let currTotalPrice = 0;
    props.receipt.forEach((value, key) => {
      currTotalPrice += value[0] * value[1];
    });
    setTotalPrice(currTotalPrice);
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

    console.log("receipt in Receipt: ", newDataSource);

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
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() =>
              props.updateReceipt(record.food, record.price / record.number, -1)
            }
          >
            Delete
          </Button>
        </Space>
      ),
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

  // This is for phoner number and address
  const customerData = props.addressShow
    ? [props.phoneNumber, props.address]
    : [props.phoneNumber];
  console.log("receipt props: ", props);
  // get total price before tax and after tax
  const priceAfterTax =
    totalPrice * 1.12 + (props.addressShow ? Number(props.deliveryCharge) : 0);
  // const updateDeliveryCharge = (event) => {
  //   setDeliveryCharge(event.target.value);
  // };
  // const logValue = () => {
  //   console.log(deliveryCharge);
  // };

  const footerContent = () => (
    <div>
      {props.addressShow ? (
        <Row justify="end">Delivery: $ {props.deliveryCharge} </Row>
      ) : null}
      <Row justify="end">Price Before Tax: $ {totalPrice}</Row>
      <Row justify="end">Tax(12%): $ {(totalPrice * 0.12).toFixed(3)}</Row>
      <Row justify="end">
        <b>Price After Tax: $ {priceAfterTax.toFixed(3)}</b>
      </Row>
    </div>
  );
  return (
    <div ref={ref}>
      <List
        size="small"
        dataSource={customerData}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        // footer={() => "total price: $".concat(totalPrice)}
        footer={footerContent}
        pagination={false}
        // if want more page, set pagination to ture and give it amount.
        scroll={{ x: 350, y: 600 }}
      />
    </div>
  );
});

export default Receipt;
