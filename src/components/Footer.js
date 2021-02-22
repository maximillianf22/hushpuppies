import React from "react";

export default function Footer() {
  return (
  <>
  <section className="bg-lighter">
   <div className="container py-5">
      <h3 className="h f-serif text-uppercase text-center text-gray-p">@Hushpuppiesco</h3>
      <div className="stats text-center">
         <hr className="mx-auto my-0 py-0 hr-footer"/>
         <a href="#/"><i className="fa fa-facebook fa-2x mt-2 mx-3 text-gray-p"></i></a>
         <a href="#/"><i className="fa fa-instagram fa-2x mt-2 mx-3 text-gray-p"></i></a>
      </div>
   </div>
</section>
<footer className="bg-white">
   <div className="container">
      <div className="row mt-4">
         <div className="col-md-3 col-12">
            <ul className="list-unstyled ">
               <li>
                  <h6 className="text-warning text-dark text-uppercase f-serif font-weight-bold">Servicio al cliente</h6>
               </li>
               <li> <a href="#/" className="text-dark text-uppercase f-12">Contáctenos</a></li>
               <li> <a href="#/" className="text-dark text-uppercase f-12">Cambios y devoluciones</a> </li>
               <li> <a href="#/" className="text-dark text-uppercase f-12">Políticas de la tienda</a></li>
               <li> <a href="#/" className="text-dark text-uppercase f-12">Políticas de datos</a></li>
            </ul>
         </div>
         <div className="col-md-3 col-6">
            <ul className="list-unstyled ">
               <li>
                  <h6 className="text-warning text-dark text-uppercase f-serif font-weight-bold">Mi cuenta</h6>
               </li>
               <li> <a href="#/" className="text-dark text-uppercase f-12">Mis pedidos</a></li>
               <li> <a href="#/" className="text-dark text-uppercase f-12">Mis devoluciones</a> </li>
            </ul>
         </div>
         <div className="col-md-3 col-6">
            <ul className="list-unstyled ">
               <li>
                  <h6 className="text-warning text-dark text-uppercase f-serif font-weight-bold">Recursos</h6>
               </li>
               <li> <a href="#/" className="text-dark text-uppercase f-12">Tiendas</a></li>
               <li> <a href="#/" className="text-dark text-uppercase f-12">Devoluciones</a> </li>
            </ul>
         </div>
         <div className="col-md-3 col-12">
            <ul className="list-unstyled ">
               <li>
                  <h6 className="text-warning text-dark text-uppercase f-serif font-weight-bold">Newsletter</h6>
               </li>
               <li  className="text-dark f-15 mb-3" style={{
               lineHeight: "1.5",
               }}> Regístrate para ser el primero en recibir nuestras noticias</li>
               <li>
            <div className="input-group">
               <input className="form-control no-border-radius border-dark" type="search" placeholder="E-MAIL" aria-label="Search"
                 style={{
                   height: "calc(1em + 1.5rem + 2px)",
                 }}
               />
               <div className="input-group-append"
                 style={{
                   height: "calc(1em + 1.4rem + 2px)",
                 }}>
               <div className="input-group-text no-border-radius border-dark border-right border-top border-bottom"><i className="lni lni-chevron-right font-weight-bold text-dark"></i></div>
            </div>
         </div>
         </li>
         </ul>
      </div>
   </div>
   <div className="row mt-4 border-top">
      <div className="col-lg-3 col-md-6 col-12 my-4 text-center">
         <img src="imagenes/footer1.jpg" alt="color"/>
      </div>
      <div className="col-lg-3 col-md-6 col-12 my-4 text-center">
         <img src="imagenes/footer2.jpg" alt="color"/>
      </div>
      <div className="col-lg-6 d-sm-none d-none d-md-block d-lg-block my-4 text-center">
         <img src="imagenes/footer3.jpg" alt="color"/>
      </div>
   </div>
  </div>
</footer>
  </>
  );
}
