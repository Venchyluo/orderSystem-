import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import "../order.css";

import { getChickenMenu } from "../services/foodMenuService";

export default function MainOrderOfFood(props) {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Button
            className="middleb"
            id="chicken"
            size="large"
            onClick={() => {
              getChickenMenu()
                .then((res) => {
                  /* 
                {"chicken": 
                    [{
                    "foodName": "Kungpao Chicken, Large",
                    "price": 10
                }],
                }
                  */
                  console.log("in get chicken menu's then");
                  let map = new Map();
                  console.log("Chicken Res: ", res);
                  res["Chicken"].forEach((dict) => {
                    map.set(dict["foodName"], dict["price"]);
                  });
                  props.updateMenu(map);
                  props.setCurrentPage("DeatailMenuOfAllFood");
                })
                .catch((err) => {
                  console.log("get chicken menu error: ", err);
                });
            }}
          >
            Chicken
          </Button>
        </Col>

        <Col span={8}>
          <Button
            className="middleb"
            id="beef"
            size="large"
            onClick={() => {
              getChickenMenu()
                .then((res) => {
                  /* 
              {"chicken": 
                  [{
                  "foodName": "Kungpao Chicken, Large",
                  "price": 10
              }],
              }
                */
                  console.log("in get chicken menu's then");
                  let map = new Map();
                  console.log("Chicken Res: ", res);
                  res["Beef"].forEach((dict) => {
                    map.set(dict["foodName"], dict["price"]);
                  });
                  props.updateMenu(map);
                  props.setCurrentPage("DeatailMenuOfAllFood");
                })
                .catch((err) => {
                  console.log("get beef menu error: ", err);
                });
            }}
          >
            Beef
          </Button>
        </Col>

        <Col span={8}>
          <Button
            className="middleb"
            id="fish"
            size="large"
            onClick={() => {
              getChickenMenu()
                .then((res) => {
                  let map = new Map();
                  res["Fish"].forEach((dict) => {
                    map.set(dict["foodName"], dict["price"]);
                  });
                  props.updateMenu(map);
                  props.setCurrentPage("DeatailMenuOfAllFood");
                })
                .catch((err) => {
                  console.log("get Fish menu error: ", err);
                });
            }}
          >
            Fish
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>
          <Button className="middleb" id="veg" size="large">
            Veg
          </Button>
        </Col>
      </Row>
      <br />

      <Row>
        <Col span={8}>
          <Button className="middleb" id="lunch" size="large">
            Lunch
          </Button>
        </Col>
        <Col span={8}>
          <Button className="middleb" id="dinner" size="large">
            Dinner
          </Button>
        </Col>
      </Row>
      <br />

      <Row>
        <Col span={8}>
          <Button className="middleb" id="chicken" size="large">
            Special
          </Button>
        </Col>
        <Col span={8}>
          <Button className="middleb" id="beef" size="large">
            Beverage
          </Button>
        </Col>
        <Col span={8}>
          <Button className="middleb" id="fish" size="large">
            Family plan
          </Button>
        </Col>
      </Row>
    </div>
  );
}
