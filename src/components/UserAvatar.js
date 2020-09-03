import {Card, Col, Row} from "antd";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import avatar5 from "../images/avatar5.jpg";
import avatar6 from "../images/avatar6.jpg";
import avatar7 from "../images/avatar7.jpg";
import avatar8 from "../images/avatar8.jpg";
import React from "react";

const UserAvatar =()=>{
    return (
        <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
                <Card className="cardimage"
                      cover={
                          <img
                              style={{ width: '80%', height: '100%', }}
                              alt="example"
                              src={avatar1}
                          />
                      }
                >
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card className="cardimage"
                      cover={
                          <img
                              style={{ width: '80%', height: '100%', }}
                              alt="example"
                              src={avatar2}
                          />
                      }
                >
                </Card>
            </Col>
            <Col  span={6}>
                <Card className="cardimage"
                      cover={
                          <img
                              style={{ width: '80%', height: '100%', }}
                              alt="example"
                              src={avatar3}
                          />
                      }
                >
                </Card>
            </Col>
            <Col className="gutter-row" span={6}>
                <Card className="cardimage"
                      cover={
                          <img
                              style={{ width: '80%', height: '100%', }}
                              alt="example"
                              src={avatar4}
                          />
                      }
                >
                </Card>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
                <Card className="cardimage"
                      cover={
                          <img
                              style={{ width: '80%', height: '100%', }}
                              alt="example"
                              src={avatar5}
                          />
                      }
                >
                </Card>
            </Col>
            <Col  span={6}>
                <Card className="cardimage"
                      cover={
                          <img
                              style={{ width: '80%', height: '100%', }}
                              alt="example"
                              src={avatar6}
                          />
                      }
                >
                </Card>
            </Col>
            <Col  span={6}>
                <Card className="cardimage"
                      cover={
                          <img
                              style={{ width: '80%', height: '100%', }}
                              alt="example"
                              src={avatar7}
                          />
                      }
                >
                </Card>
            </Col>
            <Col  span={6}>
                <Card className="cardimage"
                      cover={
                          <img
                              style={{ width: '80%', height: '100%', }}
                              alt="example"
                              src={avatar8}
                          />
                      }
                >
                </Card>
            </Col>
        </Row>
    </>
);
}
export default UserAvatar;