import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
// import "../order.css";
import { DownloadOutlined } from "@ant-design/icons";

export default function DetailMenuOfAllFood(props) {
  // props: {menu},{setCurrentPage}, {updateReceipt}
  // foodName : price

  console.log("props in DetailMenuOfAllFood: ", props);

  let menu = [];
  // props.menu is what imported from upper layer
  props.menu.forEach((price, foodName) => {
    menu.push({ foodName: foodName, price: price });
  });

  console.log("menu in DetailMenuOfAllFood: ", menu);
  function showFood(foodName, price) {
    return (
      <Button
        className="menuDetailButton "
        size="large"
        id="menuDetailButton"
        onClick={() => {
          props.updateReceipt(foodName, price, 1);
        }}
      >
        {foodName}: <br />${price}
      </Button>
    );
  }

  // function showMenu() {
  //   return menu.map((foodName, price) => {
  //     showFood(foodName, price);
  //   });
  //   // props.menu.forEach((price, foodName) => {
  //   //   renders.push(<Col>{showFood(foodName, price)}</Col>);
  //   // });
  //   // return renders.map();
  // }

  return (
    <div>
      <Row>
        {menu.map((element) => {
          return showFood(element.foodName, element.price);
        })}
      </Row>
      <br />
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
