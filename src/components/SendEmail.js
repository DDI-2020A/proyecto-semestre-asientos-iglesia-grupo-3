import React, {useState} from 'react';
import {Button, Card, Col, Form, Input, Row} from "antd";
import Divider from "antd/es/divider";
import emailjs from 'emailjs-com';

const SendEmail =()=>{

    const frmContact = { userEmail:"", concernCategory:"", emailTitle:"", emailDetails:"" };
    const [contact,setContact] = useState(frmContact);

    const handleChange = e => {
        const {name,value} = e.target;
        setContact({...contact,[name]:value});
        console.log("valores", contact);
    };

    const handleSubmit2 =()=>{
        setContact(frmContact);
    }
    const handleSubmit = e =>{


        emailjs.send("ProyectoIglesia", "template_0ndjb14", contact, "user_Ap5vRMMTcHBWzWwLe5KWm"  )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setContact(frmContact);
            }, (err) => {
                console.log("FAILED...", err);
            });
    }


    return(
      <>
          <div >

              <div className="site-card-border-less-wrapper "  id="id-contact">
                  <Card className="colorBaseA" align="center" bordered={false} >
                      <div className="site-card-wrapper " >
                          <Divider orientation="center">Prueba de Enviar Mails </Divider>
                          <Row gutter={16} align="center">
                              <Col xs={32} sm={32} md={10} lg={10}  span={8}>
                                  <Form name="nest-messages"
                                        onFinish={handleSubmit2}>

                                      <Form.Item  label="Email" rules={[{ type: 'email' }]}>
                                          <Input value={contact.userEmail} name="userEmail" onChange={handleChange}/>
                                      </Form.Item>
                                      <Form.Item  label="Asunto" >
                                          <Input value={contact.emailTitle}  name="emailTitle" onChange={handleChange} />
                                      </Form.Item>
                                      <Form.Item label="Como podemos ayudarle?">
                                          <Input.TextArea onChange={handleChange} value={ contact.emailDetails } />
                                      </Form.Item>
                                      <Form.Item >
                                          <Button type="primary" htmlType="submit" >
                                              Enviar
                                          </Button>
                                      </Form.Item>
                                  </Form>
                              </Col>

                          </Row>
                      </div>
                  </Card>
              </div>
          </div>
      </>
    )

}

export default  SendEmail;
