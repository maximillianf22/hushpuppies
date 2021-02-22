import React, { useEffect, useState } from "react"
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function useDatos() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch("json/productos.json")
    .then(response => response.json())
    .then(datos => {
      setProductos(datos)
    })
  }, [])

  return productos
}

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 5,
        pauseOnHover: true,
        infinite: true,
        dots: false
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: true,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          pauseOnHover: true,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          pauseOnHover: true,
          autoplay: true,
          slidesToScroll: 1
        }
      }
    ]
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  initialSlide: 5,
  responsive: [
  {
      breakpoint: 1360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 5,
        pauseOnHover: true,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 5,
        pauseOnHover: true,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        pauseOnHover: true,
        slidesToScroll: 1,
        initialSlide: 5
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        pauseOnHover: true,
        initialSlide: 5,
        slidesToScroll: 1
      }
    }
  ]
};

export default function Datos() {
  const productos = useDatos()
  return (
<>
<Navbar />
  <div className="container" align="center">
    <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb" className="d-sm-none d-md-block d-lg-block d-none">
              <ol className="breadcrumb breadcrumb-links breadcrumb-dark bg-white pl-1">
                <li className="breadcrumb-item text-uppercase font-weight-bold text-muted f-robo f-15 px-1 "><a className="text-muted" href="#/">Hushpupiesco</a></li>
                <li className="breadcrumb-item text-uppercase font-weight-bold text-muted f-robo f-15 px-1 "><a className="text-muted" href="#/">Calzados</a></li>
                <li className="breadcrumb-item text-uppercase font-weight-bold text-muted active  px-1 f-robo f-15" aria-current="page">Zapatillas hombre pelikan</li>
              </ol>
          </nav>
        </div>
    </div>
    <div className="container p-0">
        <section id="producto">
          <div className="row ">
              <div className="col-lg-7 col-md-6">
                <div id="productCarousel" className="carousel slide" data-ride="carousel" data-interval="8000">
                    <ol className="carousel-indicators mt-5">
                      <li data-target="#productCarousel" data-slide-to="0" className="active"></li>
                      <li data-target="#productCarousel" data-slide-to="1" className=""></li>
                      <li data-target="#productCarousel" data-slide-to="2" className=""></li>
                    </ol>
                    <div className="carousel-inner mx-auto" role="listbox">
                      <div className="carousel-item active">
                          <img src="imagenes/13.jpg" className="d-block rounded product-img" alt="Producto"/>
                      </div>
                    </div>
                </div>
                <div className="stats text-left mt-0">
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 mt-2  pl-lg-4">
                <h2 className="title font-weight-bold text-gray-p f-serif text-uppercase h3 text-left mb-0 line-h-sm">Zapatilla Hombre Pelikan</h2>
                <h3 className=" text-primary f-serif text-uppercase h3 text-left mt-0 line-h-sm font-weight-bold">$00.00</h3>
                <h6 className=" text-gray h6 text-left mt-0 line-h-sm font-weight-bold line-h-sm">Cod. de producto zap-005</h6>
                <div className="stats text-left mt-4">
                    <h6 className="title text-gray-p h6 text-left mt-0 line-h-sm font-weight-bold line-h-sm">COLOR</h6>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar border border border-dark" alt="color"/></a>
                </div>
                <div className="stats text-left mt-4">
                    <h6 className="title text-gray-p h6 text-left mt-0 line-h-sm font-weight-bold line-h-sm">TALLA</h6>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">5</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">5.5</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3 active">6</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">6.5</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">7</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">7.5</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">8</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">8.5</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">9</button>
                    <button type="button" name="" id="" className="font-weight-bold btn-check mr-3 mb-3">9.5</button>
                </div>
                <div className="stats text-left mt-3">
                    <a href="#/">
                      <h6 className="title text-gray-p h6 text-left mt-0 line-h-sm font-weight-bold line-h-sm text-uppercase mb-3"><u>Guía de tallas</u></h6>
                    </a>
                    <button type="button" name="" id="" className="font-weight-bold btn btn-primary no-border-radius btn-lg mr-2 mr-lg-4 mb-3 text-uppercase px-3 px-lg-5">Añadir al carrito</button>
                    <button type="button" name="" id="" className="font-weight-bold btn btn-link btn-link-heart no-border-radius btn-lg mb-3 text-uppercase "><i className="fa fa-heart fa-3x"></i></button>
                </div>
              </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="container">
              <h3 className="text-left text-gray-p f-serif text-uppercase border-bottom border-dark h4 font-weight-bold">Detalles de producto</h3>
              <p className="text-justify text-muted font-weight-500 f-mont">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus.
              </p>
          </div>
          <div className="container">
              <h3 className="text-left text-gray-p f-serif text-uppercase border-bottom border-dark h4 font-weight-bold mt-4">Tecnologías</h3>
              <p className="text-justify text-muted font-weight-500 f-mont">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
          </div>
        </section>
    </div>
    <section className="blogs-6 mt-4">
      <h3 className="text-left text-dark f-serif text-uppercase border-dark h4 font-weight-bold bg-lighter px-3">Completa tu look</h3>
      <div className="slider-wrapper p-3">
        <Slider {...settings}>
          {productos.map((item) =>
          <div key={item.nombre} className="slick-slide">
              <div className="m-4">
                <img className="card-img-product img-fluid" src={`${process.env.PUBLIC_URL}/imagenes/${item.foto}`} alt={item.nombre}/>
                <div className="stats text-left mt-0 row">
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                </div>
                <div className="card-body p-0">
                    <h6 className="card-title f-sm p-0">{item.nombre}</h6>
                    <h6 className="card-text p-0 m-0 mt-4 mb-3 text-primary h5 font-weight-400 f-mont"><strong>${item.precio}.00</strong></h6>
                    <button className="btn btn-block btn-lg btn-primary mt-1 text-uppercase h6 no-border-radius">Agregar al carrito</button>
                </div>
              </div>
          </div>
          )}
        </Slider>
      </div>
    </section>
    <section className="blogs-6 mt-5 mb-3">
      <h3 className="text-left text-dark f-serif text-uppercase border-dark h4 font-weight-bold px-3 border-bottom border-dark">Productos Recomendados</h3>
      <div className="slider-wrapper p-3">
        <Slider {...settings2}>
          {productos.map((item) =>
          <div key={item.nombre} className="slick-slide">
              <div className="m-4">
                <img className="card-img-product img-fluid" src={`${process.env.PUBLIC_URL}/imagenes/${item.foto}`} alt={item.nombre}/>
                <div className="stats text-left mt-0 row">
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                    <a href="#/"><img src="imagenes/13.jpg" className="avatar mr-2" alt="color"/></a>
                </div>
                <div className="card-body p-0 border-bottom border-dark">
                    <h6 className="card-title f-sm p-0">{item.nombre}</h6>
                    <h6 className="card-text p-0 m-0 mt-4 mb-3 text-primary h5 font-weight-400 f-mont"><strong>${item.precio}.00</strong></h6>
                </div>
              </div>
          </div>
          )}
        </Slider>
      </div>
    </section>
  </div>
  <Footer />
  </>
  )
}
