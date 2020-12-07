import React, { useState, useEffect } from 'react';
import  '../styles/header.css';
import './bootstrap.js';
import { BrowserRouter as Route , Link } from "react-router-dom"        ;
import Swal from 'sweetalert2';

import IconCart from  '../assist/icon/shopping-bag.svg';
import logo from '../assist/icon/logo2.png';
import IconUser from '../assist/icon/UserIcon.png';
import Cookies from 'js-cookie';

import {
     Collapse,
     Navbar,
     NavbarToggler,
     NavbarBrand,
     Nav,
     //NavItem,
     NavLink,
     UncontrolledDropdown,
     DropdownToggle,
     DropdownMenu,
     DropdownItem,
     //NavbarText,
     Form,
     Button,   
     Input,
     //FormText,
     //ButtonToggle,
     ///FormFeedback,
     FormGroup,
     Dropdown
} from 'reactstrap';
import Axios from 'axios';
const Header = (props) => {

     useEffect(() => {
          getData()
     },[])
     const [isOpen, setIsOpen] = useState(false);
     const toggle = () => setIsOpen(!isOpen);
     // const [user, setUser] = useState([])
     const [carts, setCart] = useState([]);
     // const [ttql, setQt] = useState(0);
     const logout = () => {
          Cookies.remove('Admin');
          Cookies.remove('IdUserName');
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

    const getData = () => {
         const id = Cookies.get('IdUserName');
     //     console.log('http://localhost:216/user/id='+id);
     //     Axios.get('http://localhost:216/user/id='+id).then(res =>{
     //          setUser(res.data)
     //      // console.log(res.data);
     //     })

          Axios.get('http://localhost:216/cart/id='+id).then(result => {
               setCart(result.data)
               
          })
          
         

    }
//     const qtum = () => {
//          let ttqt = 0;
//          for (let i of carts){
//               ttqt = ttqt + i.quantumProduct;
//           }
//     }
    


//     console.log(user);
     let ttqt = 0;
     for (let i of carts){
          ttqt = ttqt + i.quantumProduct;
     }
   
     return (
          
     <div className='divHeader'>
          <div className='divfirst'></div>
          {/* <Navbar  expand="md"> */}
          <Navbar color="light" light expand="md">
               <div className='logo'> 
                    <img src={logo} /> 
               </div>
          
          <NavbarToggler onClick={toggle} /> 
          <Collapse isOpen={isOpen} navbar>     
               <Nav className="mr-auto" navbar > 
             
                    <NavbarBrand > 
                         
                    </NavbarBrand>
                    <NavbarBrand>
                             
                    </NavbarBrand>
                
            
               </Nav>
               {/* <Form inline className='formSearch'>
                    <FormGroup>
                         <Input type='text' name='SearchInput'  placeholder="Bạn cần gì?"></Input> 
                         <Button type='submit' color="light">Search</Button>
                    </FormGroup>
               </Form> */}
                    <NavLink className='nav-link-class'>
                              <Link to="/" className="linkToPage">               
                                        Trang Chủ
                                        
                              </Link>
                    </NavLink>
                   <NavLink className='nav-link-class'>    
                              <Link to='/sanpham' className="linkToPage">
                                        Sản Phẩm           
                              </Link>                
                    </NavLink>   
                    {
                         ((!Cookies.get('IdUserName')) && (!Cookies.get('Admin'))) ?
                         <NavLink className='nav-link-class'>    
                              <Link to='/dangnhap' className="linkToPage">
                                   Đăng nhập        
                              </Link>                
                         </NavLink>  :
                         <NavLink className='nav-link-class'>    
                              <Link  className="linkToPage" >     
                                   {/* <Link to='#' className="linkToPage" > */}
                                        {/* Đăng xuất({user[0].userName})          */}
                                        {/* Đăng xuất */}
                                        <div class="dropdown">
                                             <span>
                                                  {/* <div className='iconUser'>
                                                       <img src={IconUser}/>     
                                                  </div> */}
                                                  Tài khoản
                                             </span>
                                             <div class="dropdown-content">
                                                  <p>{Cookies.get('UserName')}</p>
                                                  <Link to='#' className="linkTodx" onClick={()=>logout()}> 
                                                       <p>Đăng xuất</p>
                                                  </Link>  
                                             </div>
                                        </div>         
                              </Link>               
                         </NavLink>     
                    }
          
                    {/* <NavLink className='nav-link-class'>    
                              <Link to='/detail' className="linkToPage">
                                        Tài Khoản          
                              </Link>                
                    </NavLink>   */}
               <NavLink  className='linkToPage3'>
                    <Link to='/giohang' className='linkicon'>
                         <div className='IconCart'>
                         {/* {carts.map( cart => ( */}
                               <span id='sluonggio' className = 'sluonggio'>{ttqt}</span> 
                         {/* ))} */}
                        
                              
                              <img src={IconCart} /> 
                             
                         </div> 
                        
                    </Link>
                   
               </NavLink>
          </Collapse>
          </Navbar>
     </div>

     );
}

export default Header;