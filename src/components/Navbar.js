/*eslint-disable*/
import React from "react";
// components

export default function Navbar() {
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg">
        <section className="bg-primary">
          <div className="container p-0 text-center py-2">
            <span className="text-white h4 font-weight-bold text-center text-nowrap text-uppercase f-robo text-sale">
              Hot sale -30% en sandalias
            </span>
          </div>
        </section>
        <section className="bg-gray">
          <div className="container p-0">
            <ul className="navbar-nav flex-row">
              <li className="nav-item mr-0 ml-auto">
                <a className="btn btn-link mt-1 btn-sm text-uppercase text-sm text-gray-p f-robo text-nav-1" href="#/">
                  Directorio de tiendas
                </a>
              </li>
              <li className="nav-item mr-0">
                <a className="btn btn-link mt-1 btn-sm text-uppercase text-sm text-gray-p f-robo text-nav-1" href="#/">
                  Servicio al cliente
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-link mt-1 btn-sm text-uppercase text-sm text-gray-p f-robo text-nav-1" href="#/">
                  Mi cuenta
                </a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light py-2">
        <div className="container">
          <a className="navbar-brand" href="#/"
            style={{
                    maxWidth: "70%"
                }}>
            <img src="imagenes/logo.jpg"
              style={{
                  height: "auto",
                  maxWidth: "100%"
              }}/>
          </a>
          <button
            className="navbar-toggler d-sm-block d-block d-md-none d-lg-none "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-sm-none d-none d-md-block d-lg-block float-right"
            style={{
                position: "absolute",
                top: "9px",
                right: "100px",
            }} id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 ml-auto">
            <div className="input-group">
                <input className="form-control no-border-radius border-dark" type="search" placeholder="BUSCAR" aria-label="Search"
                style={{
                    height: "calc(1em + 1.5rem + 2px)",
                    width: "230px",
                }}
                />
                <div className="input-group-append" style={{
                    height: "calc(1em + 1.4rem + 2px)",
                }}>
                    <div className="input-group-text no-border-radius  border-dark border-right border-top border-bottom"><i className="lni lni-chevron-right font-weight-bold text-dark"></i></div>
                </div>
            </div>
            </form>
          </div>
          <div className="float-right d-sm-none d-none d-md-block d-lg-block "
            style={{
                position: "absolute",
                top: "60px",
                right: "100px",
            }} id="navbarSupportedContent">
            <p className="font-weight-light text-uppercase text-primary f-robo  text-nav-2">Envío gratis para pedidos superiores a $300.000</p>
          </div>
          <div className="collapse navbar-collapse float-right"
            style={{
                position: "absolute",
                top: "60px",
                right: "100px",
            }} id="navbarSupportedContent">
            <ul className="navbar-nav d-none d-block d-sm-block d-lg-none d-md-none ">
               <li className="nav-item">
                  <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Hombre
                  </a>
               </li>
               <li className="nav-item">
                <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Mujer
                  </a>
               </li>
               <li className="nav-item">
                  <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Blog
                  </a>
               </li>
               <li className="nav-item">
                  <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Historia
                  </a>
               </li>
               <li className="nav-item">
                  <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Tiendas
                  </a>
               </li>
               <li className="nav-item">
                  <form className="form-inline my-2 my-lg-0 ml-auto">
                     <div className="input-group">
                        <input className="form-control no-border-radius border-dark" type="search" placeholder="BUSCAR" aria-label="Search"
                        style={{
                        height: "calc(1em + 1.5rem + 2px)",
                        }}
                        />
                        <div className="input-group-append" style={{
                        height: "calc(1em + 1.4rem + 1px)",
                        }}>
                        <div className="input-group-text no-border-radius  border-dark border-right border-top border-bottom"><i className="lni lni-chevron-right font-weight-bold text-dark"></i></div>
                     </div>
                     </div>
                  </form>
               </li>
               <li className="nav-item text-center">
                  <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  <i className="lni lni-cart mr-2"></i>
                  Carrito 0
                  </a>
               </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg d-sm-none d-none d-md-block d-lg-block">
        <section className="bg-white border-bottom border-dark">
          <div className="container p-0">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Hombre
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Mujer
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Historia
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  Tiendas
                </a>
              </li>
              <li className="nav-item ml-auto">
                <a className="btn btn-link mt-1 text-uppercase text-gray-p f-serif" href="#/">
                  <i className="lni lni-cart mr-2"></i>
                  Carrito 0
                </a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </>
  );
}
