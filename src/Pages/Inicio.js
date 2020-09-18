import React from 'react';
import {Card, Col, Row, Form, Input, Button} from 'antd';
import '../styles/App.css';
import '../styles/inicio.css';
import ImgSobreNosotros1 from '../images/ImgSobreNosotros1.jpg';
import ImgSobreNosotros2 from '../images/ImgSobreNosotros2.jpg';
import ImgSobreNosotros3 from '../images/ImgSobreNosotros3.jpg';
import avatar4 from '../images/avatar4.jpg';
import avatar5 from '../images/avatar5.jpg';
import avatar6 from '../images/avatar6.jpg';
import ImgEquipo1 from '../images/ImgEquipo1.jpg';
import ImgEquipo2 from '../images/ImgEquipo2.jpg';
import ImgEquipo3 from '../images/ImgEquipo3.jpg';
import ImgDirec from '../images/ImgDirec.jpg';
import Meta from "antd/es/card/Meta";
import Divider from "antd/es/divider";
import {Link} from "react-router-dom";
import SendEmail from "../components/SendEmail";


const Inicio = () => {

    //const [numPag, setNumPag] = useState (1);

    return (
        <>


            {/*//Bienvenidos*/}
            <div >
                <div className="site-card-border-less-wrapper " >
                    <Card className="imagen-fondo-inicio" align="center" bordered={false} >
                        <div className="site-card-wrapper "  >
                            <Card className=" tamanio-cuadro"  bordered={false} style={{marginTop:95}}>
                                <div className="site-card-wrapper "  >
                                    <p>Bienvenidos</p>
                                    <p>  Ahora puedes reservar un asiento para la ceremonia de la Eucaristia de la Iglesia X,
                                        desde la comodidad de tu casa  </p>
                                    <Button className="separa-boton" type="primary" shape="round"  >
                                        <Link to="/RegisterSeat">Registrar Asiento</Link>
                                    </Button>
                                    <Button type="primary" shape="round"  >
                                        <Link to="/login">Ingresar Foro</Link>
                                    </Button>
                                </div>
                            </Card>
                        </div>


                    </Card>
                </div>
            </div>
            {/*//sobre Nosotros*/}

            <div >

                <div className="site-card-border-less-wrapper "  id="id-about">
                    <Card className="colorBase" align="center" bordered={false} >
                        <div className="site-card-wrapper "  >
                            <Divider orientation="center">Sobre Nosotros</Divider>
                            <Row gutter={16} align="center">
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img style={{ width: '40%', height: '100%', borderRadius: '50%'}}
                                                 alt="example"
                                                 src={ImgSobreNosotros1}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="¿Qué Somos?"
                                            description="La iglesia tiene el objetivo de establecer una iglesia que sea acorde con el corazón de Dios para que los creyentes puedan servirse y proveerse mutuamente en las palabras de Dios y en el amor de Dios, obedecer y adorar a Dios Todopoderoso, Cristo de los últimos días, y convertirse en verdaderos testimonios para Dios."
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgSobreNosotros2}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Organización en la Iglesia"
                                            description="Debido a la situacion actual que esta atravesando el mundo entero, la Iglesia de la parroquia ha decido realizar las ceremonías de una manera ordenada respetando el distanciamiento social que han propuesto las autoridades del área de la salud."
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8} span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgSobreNosotros3}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="¿Por qué?"
                                            description="Nuestra tarea es clarificar lo que nos ha sido revelado por Dios desde los evangelios y que ha dejado en custodia para que lo sigamos enseñando a todas las generaciones hasta el fin de los tiempos. La familia cristiana,    es  la mayor y más perfecta imagen de Dios sobre la tierra."
                                        />
                                    </Card>


                                </Col>
                            </Row>
                        </div>


                    </Card>
                </div>


            </div>

            {/*//Testimonios*/}

            <div >

                <div className="site-card-border-less-wrapper " id="id-testimonio">
                    <Card  align="center" bordered={false} >
                        <div className="site-card-wrapper " >
                            <Divider orientation="center">Testimonios</Divider>
                            <Row gutter={16} align="center">
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={avatar4}

                                            />
                                        }
                                    >
                                        <Meta
                                            title="Verónica  Andrade  "
                                            description="Soy un mujer de 30 años que ha tenido varios encuentros con Dios de los que me he ido dando cuenta poco a poco a lo largo del tiempo. Dios existe, soy testimonio de vida de su amor, misericordia y providencia por nosotros. "
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={avatar5}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Richard Marntinez"
                                            description="Yo fui sanado de un cáncer en mi garganta, para los médicos yo que daría mudo y gracias a Dios, cumplo 18 años el próximo 16 de diciembre y hablo perfectamente bien, para la gloria y honra del Señor"
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8} span={8}>
                                    <Card
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={avatar6}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Evaluna  Fernandez "
                                            description="Cuando conocí de Jesús supe que todo me es permitido, pero que no todo me conviene”. Comprendí que Dios quiere que disfrutemos la vida, pero que los excesos solo nos llevan al hastío y que nunca encontraremos la satisfacción total en esta tierra sin El en nuestras vidas."
                                        />
                                    </Card>


                                </Col>
                            </Row>
                        </div>

                    </Card>
                </div>


            </div>

            {/*// Equipo*/}

            <div >

                <div className="site-card-border-less-wrapper "  id="id-equipo">
                    <Card className="colorBase" align="center" bordered={false} >
                        <div className="site-card-wrapper " >
                            <Divider orientation="center">Equipo</Divider>
                            <Row gutter={16} align="center">
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgEquipo1}

                                            />
                                        }
                                    >
                                        <Meta
                                            title="Hermana Josefina "
                                            description="Monja"
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8}  span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgEquipo2}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Mons. Danilo Echeverría"
                                            description="Obispo"
                                        />
                                    </Card>
                                </Col>
                                <Col xs={32} sm={16} md={8} lg={8} span={8}>
                                    <Card
                                        className="colorBase"
                                        cover={
                                            <img
                                                style={{ width: '40%', height: '100%', borderRadius: '50%' }}
                                                alt="example"
                                                src={ImgEquipo3}
                                            />
                                        }
                                    >
                                        <Meta
                                            title="Mons. David Israel de la Torre"
                                            description="Arzobispo "
                                        />
                                    </Card>


                                </Col>
                            </Row>
                        </div>


                    </Card>
                </div>


            </div>

            {/*//Contactanos*/}

            <div >

                <div className="site-card-border-less-wrapper "  id="id-contact">
                    <Card className="colorBaseA" align="center" bordered={false} >
                        <div className="site-card-wrapper " >
                            <Divider orientation="center">Contáctanos</Divider>
                            Para recibir información detallada sobre las utilidades y servicios que ofrece nuestra pagina
                            ponte en contacto con nostros enviando un correo electrónico
                            <Divider />
                            <Row gutter={16} align="center">
                                <Col xs={32} sm={32} md={10} lg={10}  span={8}>
                                    <a href="https://www.google.com.ec/maps/place/La+luz+del+mundo/@-0.3285672,-78.5537108,15z/data=!4m8!1m2!2m1!1siglesia+la+luz+del+mundo!3m4!1s0x91d5a2350cf78025:0xb59ef8a2f91564d8!8m2!3d-0.3285672!4d-78.5449561"
                                       >
                                        <img
                                            style={{ width: '100%', height: '90%' }}
                                            alt="example"
                                            src={ImgDirec}
                                        />
                                    </a>
                                </Col>
                                <Col xs={32} sm={32} md={10} lg={10}  span={8}>

                                    <Form name="nest-messages"  >

                                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name={['user', 'text']} label="Asunto" rules={[{ type: 'text' }]}>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name={['user', 'introduction']} label="Como podemos ayudarle?">
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item >
                                            <Button type="primary" htmlType="submit">
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



            <SendEmail />
        </>
    )

}

export default Inicio;