import Caro from "./component/Caro";
import Demo from "./component/Demo";



export default function Home() {
  return (
    <>
   <Demo/>
   <Caro/>
                     {/* <!-- Reach Us --> */}
 <h1 class="mt-5 pt-4 mb-4 text-center fw-bold h-font">Reach Us</h1>

 <div class="container">
  <div class="row">
    <div class="col-lg-12 col-md-8 p-4 mb-lg-0 mb-3 bg-white rounded">
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.4674393811724!2d76.97126387550023!3d28.615749375673907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzU2LjciTiA3NsKwNTgnMjUuOCJF!5e0!3m2!1sen!2sae!4v1703838842593!5m2!1sen!2sae" className="w-100 rounded " height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div class="col-lg-4 col-md-4">
      <div class="bg-white p-4 rounded mb-4">
        <h5>Call Us </h5>
        <a  href="tel: +918076864233" class="d-inline-block mb-2 text-decoration-none text-dark"><i class="bi bi-telephone-fill"></i> +918076864233</a>
       </div>
      </div>


    </div>      
    </div>  
    </div>
   
    </>
  )
}
