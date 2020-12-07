import React, { Component } from 'react';
import '../styles/dangnhap.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/TextField';
import Axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import 'animate.css';

class Dangnhap extends Component{

     constructor(props){
          super(props)
          this.login = this.login.bind(this)
     }

     componentDidMount() {
          if (Cookies.get('IdUserName')){
               this.props.history.push('/');
          }
          else if (Cookies.get('Admin')){
               this.props.history.push('/')
          }
     }

     login(e){

          e.preventDefault();
          // console.log(e.target.username.value);
          // console.log(e.target.password.value);
          
          const {username, password} = e.target;
          Axios.post('http://localhost:216/login', {
               username: username.value,
               password: password.value
          })
          .then(res =>{
               // console.log(res.data.id);
               if (res.data.name === 'adminhdshop'){
                    // Cookies.set('IdAdmin', res.data.id, { expires: 7 });
                    Cookies.set('Admin', res.data.name ,{ expires: 7})
                    // window.location.reload(1);
                   
                    Swal.fire({
                         position: 'top',
                         icon: 'success',
                         title: 'Đăng nhập thành công!',
                         showConfirmButton: false,
                         timer: 1500
                       })
                    //  window.location.reload();
                   setTimeout(function(){
                        
                         window.location.reload(1);
                         // alert("5 Seconds has passed! The page will now refresh");
                    }, 1500); 
               }else if((res.data.id) && (res.data.name !== 'adminhdshop')) {
                    Cookies.set('IdUserName', res.data.id, { expires: 7 });
                    Swal.fire({
                         position: 'top',
                         icon: 'success',
                         title: 'Đăng nhập thành công!',
                         showConfirmButton: false,
                         timer: 1500
                       })
                    //  window.location.reload();
                   setTimeout(function(){
                         window.location.reload(1);
                         // alert("5 Seconds has passed! The page will now refresh");
                    }, 1500); 
                    // console.log('asdasd'+UserName);
               }else{
                      Swal.fire({
                           position:'top',
                             icon: 'error',
                             title: 'Lỗi!',
                             text: 'Đăng nhập thất bại!',
                         })
               }
               console.log(res.data.name);
               if (res.data.name){
                    Cookies.set('UserName', res.data.name, {expires: 7})
               }
          })
          .catch(error => {
               console.log(error);
          })
          console.log(Cookies.get('Admin'));
     }
    


     render(){
          console.log(Cookies.get('Admin'));
          return(
               <div className='Dangnhap'>
                  {/* <div class ="animate__animated animate__backInLeft"> */}
                  <div class ="animate__animated animate__fadeIn">
                    <div className='formDangnhap'>
                         <h3>ĐĂNG NHẬP</h3>
                              <form onSubmit={this.login} noValidate autoComplete="off">
                                   <TextField id="filled-basic" label="Tài khoản (Username)" variant="filled" name='username' className='txtUser' />
                                   <TextField id="filled-basic" label="Mật khẩu (Password)" variant="filled" type='password' name='password' className='txtPass'/>
                                   <button className='btnDN' type='submit'>Đăng nhập</button><br/>
                                   <button className='btnFB' type='submit'>Login FaceBook</button><br/>
                                   <Link to='/dangky' className='btnDK'>
                                        Đăng ký
                                   </Link>
                                   
                              </form>
                         </div>
                  </div>

                         
                   
               </div>
          )
     }

}
export default Dangnhap; 