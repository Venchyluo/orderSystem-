import { Button } from "antd";
import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";
import { Card } from "antd";
import PhoneOrder from "./PhoneOrder";
import WalkinOrder from "./WalkinOrder";
import DeliveryOrder from "./DeliveryOrder";
// import "../order.css";

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;

export default function Main() {
  const [currentPage, setCurrentPage] = React.useState("Selection");

  function showPage() {
    if (currentPage === "Selection") {
      return (
        <Row>
          <Col span={8}>
            <Card
              className="cardmiddle"
              hoverable
              style={{ width: 320 }}
              cover={
                <img
                  alt="Walk in"
                  src="https://purepng.com/public/uploads/large/31508450233p12vbpvyhggv2xyp77mhr2i8outokxhkbiddt9kz86wwjjvmw9cjdqnbll5yfdk94yffudvqdcuunqwqequjwwvny1far8cvpq46.png"
                />
              }
              onClick={() => setCurrentPage("WalkInOrder")}
            >
              <Meta title="Walk in" />
            </Card>
          </Col>

          <Col span={8}>
            <Card
              className="cardmiddle"
              hoverable
              style={{ width: 320 }}
              cover={
                <img
                  alt="example"
                  src="https://cdn0.iconfinder.com/data/icons/food-delivery-14/512/order-phone-call-food-delivery-512.png"
                />
              }
              onClick={() => setCurrentPage("PhoneOrder")}
            >
              <Meta title="Phone" />
            </Card>
          </Col>

          <Col span={8}>
            <Card
              className="cardmiddle"
              hoverable
              style={{ width: 320 }}
              cover={
                <img
                  alt="Delivery"
                  src="http://www.restaurantconsultingfirm.com/blog/wp-content/uploads/2016/09/Food-Delivery-App.jpg"
                />
              }
              onClick={() => setCurrentPage("DeliverOrder")}
            >
              <Meta title="Delivery" />
            </Card>
          </Col>
        </Row>
      );
    } else if (currentPage === "WalkInOrder") {
      return <WalkinOrder />;
    } else if (currentPage === "PhoneOrder") {
      return <PhoneOrder />;
    } else if (currentPage === "DeliverOrder") {
      return <DeliveryOrder />;
    }
  }

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        Order system
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 15px", marginTop: 64 }}
      >
        {showPage()}
      </Content>

      <Footer style={{ textAlign: "center" }}>copyright </Footer>
    </Layout>
  );
}
