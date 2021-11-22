import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import "../order.css";

import { getDetailMenu } from "../services/foodMenuService";

export default function MainOrderOfFood(props) {
  const [menuRes, setMenuRes] = React.useState("");

  useEffect(() => {
    // == component did mount
    getDetailMenu().then((res) => {
      console.log("get detail menu res: ", res);
      setMenuRes(res);
    });
  }, []);

  function showButtons() {
    let final = [];
    Object.entries(menuRes).map(([foodType, value]) => {
      let button = (
        <Col span={8}>
          <Button
            className="middleb"
            id={foodType}
            size="large"
            style={{ backgroundColor: value["color"] }}
            onClick={() => {
              /* 
            {"chicken": 
                [{
                "foodName": "Kungpao Chicken, Large",
                "price": 10
            }],
            }
              */
              let map = new Map();
              console.log("detail menu Res: ", menuRes);
              value["subMenu"].forEach((dict) => {
                map.set(dict["foodName"], dict["price"]);
              });
              props.updateMenu(map);
              props.setCurrentPage("DetailMenuOfAllFood");
            }}
          >
            {foodType}
          </Button>
        </Col>
      );
      final.push(button);
    });
    console.log("finish render Main order of food");
    return final;
  }

  return <Row gutter={[1, 15]}>{showButtons()}</Row>;
}
