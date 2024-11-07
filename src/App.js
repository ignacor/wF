import './css/style.css'
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';
import pri from './img/Schematiq.png'
import cont from "./img/3.png"
import constru from "./img/2.png"
import abog from "./img/Home.png"
import inmob from "./img/1.png"
import rest from "./img/Inicio.png"

function App() {
  return (
    <>
    <div className='bienv'>
      <Navbar collapseOnSelect expand="lg" bg="black" data-bs-theme="dark" className="navbs">
        <Container>
          <Navbar.Brand href=""> <AiOutlineCode />   Web Forge</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">


            </Nav>
            <Nav>
              <Nav.Link href="#trabajos">Trabajos</Nav.Link>
              <Nav.Link href="#conocenos">Conocenos</Nav.Link>
              <Nav.Link href="#contactanos">Contactanos</Nav.Link>


              <Nav.Link eventKey={2} href="#redes">
                Redes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='eslogan'>
        <h1 className='eslogan'> <b>Tu exito online comienza con WebForge.</b></h1>
      </div>

      <div className='cont'>
        <a href="#contactanos"> <button className='but' >Contactanos!</button></a>
      </div>
      <div className='cont'>
        <img className='imgstyle' src={pri} alt="" />
      </div>
    </div>
    <div id='trabajos' className='cont'>
      <h2 className='h2sty'> <b>Conoce nuestros trabajos!</b> </h2>
    </div>

    <div  className="contenedor"> 
       <figure>
        <img src={cont} alt="" />
        <div className="capa">
          <h3>Estudio Contable</h3>
          <p>Plantilla de pagina web para un Estudio Contable.</p>
          <a href="https://webforgeexample.my.canva.site/estudiocontable"> Click aqui para verla!</a>
        </div>
      </figure>
      <figure>
        <img src={constru} alt="" />
        <div className="capa">
          <h3>Constructora</h3>
          <p>Plantilla de pagina web para una Constructora</p>
          <a href="https://webforgeexample.my.canva.site/empresaconstructora"> Click aqui para verla!</a>
        </div>
      </figure>
    </div>
    <div  className="contenedor">
      <figure>
        <img className='abj' src={abog} alt="" />
        <div className="capa">
          <h3 className='abog'>Firma de Abogados</h3>
          <p>Plantilla de pagina web para una Firma de abogados.</p>
          <a href="https://webforgeexample.my.canva.site/abogados"> Click aqui para verla!</a>
        </div>
      </figure>
      <figure>
        <img className='abj' src={inmob} alt="" />
        <div className="capa">
          <h3>Inmobiliaria</h3>
          <p>Plantilla de pagina web para una Inmobiliaria</p>
          <a href="https://webforgeexample.my.canva.site/"> Click aqui para verla!</a>
        </div>
      </figure>
      <figure>
        <img className='abj' src={rest} alt="" />
        <div className="capa">
          <h3>Restaurante</h3>
          <p>Plantilla de pagina web para un Restaurante.</p>
          <a href="https://webforgeexample.my.canva.site/restaurante"> Click aqui para verla!</a>
        </div>
      </figure>
      </div>

    <div id='conocenos' className='cont'>
      <h1 className='h2sty'><b>Conocenos!</b></h1>
    </div>
    <div className='cont'>
      <div  className='textoteam'>
        <h2 className='h2team'>Somos WebForge.</h2>
        <p className='pteam'>WebForge es un equipo de desarrolladores web, diseñadores y estrategas digitales con una misión clara: Transformar ideas en experiencias digitales excepcionales.
          Con años de experiencia en la industria, hemos perfeccionado nuestras habilidades para ofrecer productos que no solo cumplen con las expectativas de nuestros clientes,
          sino que las superan.
        </p>
        <h2 className='h2team'>Nuestros Servicios</h2>
        <p className='pteam'>
          <b>Desarrollo Web Personalizado:</b>  Creamos sitios web adaptados a las necesidades específicas de cada cliente, utilizando las últimas tecnologías y prácticas de desarrollo. <br />
          <b>Diseño Responsivo:</b> Garantizamos que cada sitio web se vea y funcione perfectamente en cualquier dispositivo, desde computadoras de escritorio hasta teléfonos móviles. <br />
          <b>Optimización SEO:</b> Implementamos estrategias de optimización para motores de búsqueda que mejoran la visibilidad y el posicionamiento de los sitios web en los resultados de búsqueda. <br />
          <b>Mantenimiento y Soporte:</b> Ofrecemos servicios continuos de mantenimiento y soporte para asegurar que los sitios web de nuestros clientes estén siempre actualizados y funcionando sin problemas.
        </p>
      </div>
    </div>
    <div id='contactanos' className='cont'  >
      <h1 className='h2sty'><b>Contactanos!</b></h1>
    </div>
    <form action="https://formsubmit.co/ignaciocoro07@gmail.com" method="POST">  
    <Container fluid="md">
      <Row>
        <Col >
          <Stack gap={3}>
            <div className="msgcont p-2">
              <div>
                <input type="text" name='name' className='inputname' placeholder='Nombre Completo' />
              </div>
            </div>
            <div className=" msgcont p-2">
              <input type="text" name='subject' className='inputnum' placeholder='Numero de Telefono' />
            </div>
            <div className="msgcont p-2">
              <input type="text" name='email' className='inputnum' placeholder='Direccion de Email' />
            </div>
          </Stack></Col>
        <Col>
          <div className='msgcont'>
            <input type="text" name='comments' className='inputex' placeholder='Tu Mensage' />
          </div></Col>
      </Row>
    </Container>
    <div className="cont"> <input className='inputbut' type="submit" value="Enviar" /></div>
    </form>
  

    <div id='redes' className='contfot'>
      <h1 className='h1fot'> <b> Nuestras Redes</b></h1>
    </div>
    <div className='cont space'>
      <a className='redes' href="https://www.tiktok.com/@webforgesa"><AiOutlineTikTok />        </a>
      <a className='redes' href="https://www.linkedin.com/in/web-forge-inc-85b020334/"><AiOutlineLinkedin />        </a>
      <a className='redes' href="https://api.whatsapp.com/send?phone=543574401330"><AiOutlineWhatsApp />  </a>
      <a className='redes' href="https://www.instagram.com/webforgesa/"><AiOutlineInstagram />        </a>
    </div>
    <div className='cont'>
      <h3 className='h3fot'>Crece con WebForge.</h3>
    </div>
    <div className='cont'>
      <h5 className='copy'>© WebForge 2024 - Todos los derechos reservados</h5>
    </div> 
  </>
  );
}

export default App;
