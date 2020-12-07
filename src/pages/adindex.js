import React, { Component } from 'react';
import Cookies from 'js-cookie';
import '../styles/adindex.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



class adhearder extends Component{
     constructor(props){
          super(props)


          this.logout = this.logout.bind(this)
         
     }
     componentDidMount(){
          if (!Cookies.get('Admin')){
               this.props.history.push('/');
          }
     }


     logout(){
          Cookies.remove('Admin');
          Cookies.remove('IdAdmin');
          Cookies.remove('UserName');
          Swal.fire({
               position: 'top',
               icon: 'success',
               title: 'Đã đăng xuất!',
               showConfirmButton: false,
               timer: 1500
             })
          setTimeout(function(){
               window.location.reload(1);
          }, 1500); 
     }

     render(){
         


          
          return(
               <div className='adheader'>
                    <div className='navheader'>
                       
                         <nav className='nav1' class="navbar navbar-expand-lg navbar-light bg-light">
                                   <Link>
                                        <a class="navbar-brand" className='navbar-brandd'>HD Shop</a>

                                   </Link>

                                   {/* <div className='nav-tool'> */}
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                             <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse "  id="navbarText">
                                             <ul class="navbar-nav mr-auto">
                                                  <li class="nav-item">
                                                       <Link to='/'>
                                                            <a className='aad' class="nav-link" >Chung <span class="sr-only">(current)</span></a>
                                                       </Link>
                                                       
                                                  </li>
                                                  <li class="nav-item">
                                                       <Link to='/sanpham'>
                                                            <a className='aad' class="nav-link">Sản Phẩm</a>
                                                       </Link>
                                                       
                                                  </li>
                                                  <li class="nav-item">
                                                       <Link to='/hoadon'>
                                                            <a className='aad' class="nav-link" >Đơn hàng</a>
                                                       </Link>
                                                       
                                                  </li>
                                             </ul>
                                             
                                             {/* <span class="navbar-text">
                                                  Navbar text with an inline element
                                             </span> */}
                                             <ul class="navbar-nav ml-auto">
                                                  <li class="nav-item">
                                                       <a className='aad' class="nav-link" href="#">{Cookies.get('Admin')}</a>
                                                  </li>
                                                  <li class="nav-item">
                                                       <a className='aad' onClick={this.logout} class="nav-link" href="">Đăng xuất</a>
                                                  </li>
                                             </ul>
                                        {/* </div> */}
                                   </div>
                                   
                         </nav>

                    </div>


               </div>



          )
     }

}
export default adhearder;