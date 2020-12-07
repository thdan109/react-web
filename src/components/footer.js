import React, {Component} from "react";
import './bootstrap';
import '../styles/footer.css';
class Footer extends Component{
     render(){
          return(
               <div className='footer-app'>
                  {/* Footer
                    <footer class="page-footer font-small teal pt-4">
                     Footer Text
                         <div class="container-fluid text-center text-md-left">
                               Grid row 
                              <div class="row">
                                    Grid column 
                                   <div class="col-md-6 mt-md-0 mt-3">
                                         Content
                                        <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
                                             repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
                                             harum esse fugiat. Itaque, culpa?</p>
                                   </div>
                                              Grid column
                                             <hr class="clearfix w-100 d-md-none pb-3"/>
                                              Grid column                                     
                                   <div class="col-md-6 mb-md-0 mb-3">

                                              Content 
                                             <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
                                             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio deserunt fuga perferendis modi earum
                                                  commodi aperiam temporibus quod nulla nesciunt aliquid debitis ullam omnis quos ipsam, aspernatur id
                                                  excepturi hic.</p>
                                   </div>
                                        Grid column 
                              </div>
                          Grid row 

                         </div>
                          Footer Text 
                    </footer> */}
                  
                    <footer className="page-footer font-small unique-color-dark">

                    <div class="underContainer" >
                    <div class="container">

                         
                         <div class="row py-4 d-flex align-items-center">

                         
                         <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                              <h6 class="mb-0"></h6>
                         </div>
                         
                         <div class="col-md-6 col-lg-7 text-center text-md-right">

                              <a class="fb-ic">
                              <i class="fab fa-facebook-f white-text mr-4"> </i>
                              </a>
                         
                              <a class="tw-ic">
                              <i class="fab fa-twitter white-text mr-4"> </i>
                              </a>
                         
                              <a class="gplus-ic">
                              <i class="fab fa-google-plus-g white-text mr-4"> </i>
                              </a>
                         
                              <a class="li-ic">
                              <i class="fab fa-linkedin-in white-text mr-4"> </i>
                              </a>
                         
                              <a class="ins-ic">
                              <i class="fab fa-instagram white-text"> </i>
                              </a>

                         </div>
                         

                         </div>
                    

                    </div>
                    </div>


                    <div class="container text-center text-md-left mt-5">

                    
                    <div class="row mt-3">

                    
                         <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                              <h6 class="">HD shop</h6>
                              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" ></hr>
                              <p>Rất vui được phục vụ quí khách!</p>

                         </div>
                         <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                              <h6 class="">Chúng tôi</h6>
                              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                              <p>
                                   <a href="#!">Sản phẩm</a>
                              </p>
                              <p>
                                   <a href="#!">Liên hệ</a>
                              </p>
                              <p>
                                   {/* <a href="#!">BrandFlow</a> */}
                              </p>
                              <p>
                                   {/* <a href="#!">Bootstrap Angular</a> */}
                              </p>

                         </div>

                         {/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                    
                              <h6 class="">Useful links</h6>
                              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                              <p>
                                   <a href="#!">Your Account</a>
                              </p>
                              <p>
                                   <a href="#!">Become an Affiliate</a>
                              </p>
                              <p>
                                   <a href="#!">Shipping Rates</a>
                              </p>
                              <p>
                                   <a href="#!">Help</a>
                              </p>

                         </div> */}
                    
                         <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                         
                              <h6 class="">Địa chỉ</h6>
                              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" className="hrFooter"></hr>
                              <p>
                                   <i class="fas fa-home mr-3"></i> Ninh Kiều, Cần Thơ, Việt Nam</p>
                              <p>
                                   <i class="fas fa-envelope mr-3"></i> hdshop@gmail.com</p>
                              <p>
                                   <i class="fas fa-phone mr-3"></i>0368 886 688</p>
                              <p>
                                   <i class="fas fa-print mr-3"></i>Fax: .......</p>


                         </div>
                         

                    </div>
                    

                    </div>
                    
                    </footer>
               </div>
              
          )
     }
}

export default Footer;