import ProductGallery from "../../components/product-gallery/ProductGallery";


export default function Home() {
 
  return(<>
    <section className="section_banner">
     <img src="/assets/img/fondos/banner.png" alt="banner" />
     <div className="banner_info">
       <h2 className="banner_title">Venus del litoral</h2>
       <p className="banner_text">Diseño inspirado en los paisajes y la cultura correntina que busca transmitir la esencia de esta tierra extraordinaria. Estas obras nos
         invitan a sumergirnos en la belleza y la diversidad de esta provincia argentina.</p>
     </div>
    </section>
    <ProductGallery />
    
  </>)
}






//   return (<>   
//   <section className="service_features">
//     <article className="feature">
//       <img
//         className="image_feature"
//         src="/assets/img/iconos/world.svg"
//         alt="Envios a todo el mundo"
//       />
//       <div className="feature_description"> Recibilos en donde estés </div>
//     </article>
//     <article className="feature">
//       <img
//         className="image_feature"
//         src="/assets/img/iconos/present.svg"
//         alt="Regalo"
//       />
//       <div className="feature_description"> Hace un regalo distinto </div>
//     </article>
//     <article className="feature">
//       <img
//         className="image_feature"
//         src="/assets/img/iconos/t-shirt.svg"
//         alt="Impresion en distintas prendas"
//       />
//       <div className="feature_description">
//         {" "}
//         Hacemos impresiones en indumentaria{" "}
//       </div>
//     </article>
//   </section></>)
// }
