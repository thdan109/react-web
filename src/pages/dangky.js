import React, { Component } from 'react';
import '../styles/dangky.css';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/TextField';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import { TextField } from '@material-ui/core';
import Axios from 'axios';
import 'animate.css';
import Swal from 'sweetalert2'

class Dangky extends Component{

     constructor(props){
          super(props)
          this.state = {
               username: '',
               password: '',
               phone: '',
               namecus: '',
               // sex: '',
               valiName: true,
               valiPass: true,
               valiPhone: true ,
               valiNamecus: true,
          };
               
     this.handleonChange = this.handleonChange.bind(this) 
     this.onSubmit = this.onSubmit.bind(this)    
     
}

     handleonChange(event){
          if(event.target.name === 'username'){
                    if (event.target.value.length <8 ){
                         // console.log('sai');
                         this.setState({valiName: false},()=>{
                              // console.log(this.state.valiName);
                              document.getElementById('filled-basic').style.border = ' 1px solid red';
                              document.getElementById('valiName').innerHTML = 'Tên đăng nhập 8 ký tự!'
          
                         })
                    }else if(event.target.value.length >=8 ){
                         // console.log('dung');
                         this.setState({valiName: true},()=>{
                                        // console.log(this.state.valiName);
                                        document.getElementById('filled-basic').style.border = ' none';
                                        document.getElementById('valiName').innerHTML = '';
                                   })
                    }
          }else if (event.target.name === 'password'){
               if (event.target.value.length < 10 ){
                    this.setState({valiPass: false}, () =>{
                                   document.getElementById('filled-basic1').style.border = ' 1px solid red';
                                   document.getElementById('valiPass').innerHTML = "Độ dài mất khẩu ít nhất 10!"
                              })
               }else if (event.target.value.length >=10){
                    this.setState({valiPass: true}, () =>{
                                   document.getElementById('filled-basic1').style.border = ' none';
                                   document.getElementById('valiPass').innerHTML = '';
                              }) 
                              
               }

          }else if(event.target.name === 'namecus'){
               if (event.target.value.length < 1){
                    this.setState({valiNamecus: false}, () =>{
                                   document.getElementById('filled-basic3').style.border = ' 1px solid red';
                                   document.getElementById('valiNamecus').innerHTML = "Hãy điền tên của bạn!"
                              })
               }else if (event.target.value.length >= 1){
                    this.setState({valiNamecus: true},()=>{
                                        // console.log(this.state.valiName);
                                        document.getElementById('filled-basic3').style.border = ' none';
                                        document.getElementById('valiNamecus').innerHTML = '';
                                   })
               }
          }else if(event.target.name === 'phone'){
               if (event.target.value.length < 10){
                    this.setState({valiPhone : false}, () => {
                                   document.getElementById('filled-basic2').style.border = ' 1px solid red';
                                   document.getElementById('valiPhone').innerHTML = "Số điện thoại đủ 10!"
                              })
               }else if (event.target.value.length >=10){
                    this.setState({valiPhone: true}, ()=> {
                                   document.getElementById('filled-basic2').style.border = ' none';
                                   document.getElementById('valiPhone').innerHTML = '';
                              })
               }
          }
          // console.log(this.state.valiName , this.state.valiPass, this.state.valiNamecus, this.state.valiPhone);
          
          this.setState ({[event.target.name]: event.target.value})

          
     }


     onSubmit(event){
          event.preventDefault();
          // console.log(this.state.username.length);
          
          
          // console.log(this.state.valiName , this.state.valiPass, this.state.valiNamecus, this.state.valiPhone);
          if ( (this.state.valiName === true) && (this.state.valiNamecus === true) && (this.state.valiPass === true) && (this.state.valiPhone === true)){
               // console.log('gui dc');
                    Axios.post('http://localhost:216/sigin' , {
                    username: this.state.username,
                    password: this.state.password,
                    phone: this.state.phone,
                    namecus: this.state.namecus
               })
               .then(res =>{
                    
                   
               })
               .catch(error =>{
                    console.log(error);
               })
               Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Đăng ký thành công!',
                    showConfirmButton: false,
                    timer: 1500
               })  
          }else {
               // console.log('thoi');
          }

          // console.log(this.state);
          // Axios.post('http://localhost:216/sigin' , {
          //      username: this.state.username,
          //      password: this.state.password,
          //      phone: this.state.phone,
          //      namecus: this.state.namecus
          // })
          // .then(res =>{
          //      // console.log(res.data.username)
          // })
          // .catch(error =>{
          //      console.log(error);
          // })
    }

    


     render(){
          // console.log(this.state.username.length);
          return(
               <div className='Dangky'>
                    <div class ="animate__animated animate__fadeIn">
                         <div className='fomDangky'>
                              <h3>ĐĂNG KÝ</h3>
                              <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                                   <div id="email">
                                        <span id='valiName'></span>
                                        <TextField id="filled-basic" onChange={this.handleonChange} label="Email" variant="filled" name='username' className='txtUser' /><br/>
                                        
                                   </div>
                                   <div id='pass'>
                                        <span id='valiPass'></span>
                                        <TextField id="filled-basic1" onChange={this.handleonChange} label="Mật khẩu" variant="filled" name='password' className='txtPassword' type='password'/> <br/>
                                        
                                   </div>
                                   <div id ='namecus '>
                                        <span id='valiNamecus'></span>
                                        <TextField id="filled-basic3" onChange={this.handleonChange} label="Tên khách hàng" variant="filled" name='namecus' className='txtNamecus'/>
                                   </div>

                                  
                                   <div id='phone'>
                                        <span id ='valiPhone'></span>
                                        <TextField id="filled-basic2" onChange={this.handleonChange} label="Số điện thoại" variant="filled" name='phone' className='txtPhone'/><br/>

                                   </div>
                                  
                                   
                                   {/* <TextField id="filled-basic" onChange={this.handleonChange} label="Giới tính" variant="filled" name='sex' className='txtSex'/>                */}
                                   <button className='btnDK1' type='submit'>Đăng ký</button><br/>
                              </form>
                         </div>
                    </div>
                    
               </div>

          )
     }
}
export default Dangky;