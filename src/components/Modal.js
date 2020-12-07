import Axios from 'axios';
import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cookies from 'js-cookie';
import '../styles/modal.css';
import Swal from 'sweetalert2'

class Modals extends Component{

     constructor(props){
          super(props)
          this.state={
               modal: false,
               userID:'',
               username:'',
               name:'',
               phone:'',
               address:'',
               carts: []

          }
          this.handleonChange = this.handleonChange.bind(this)
          this.togglee = this.togglee.bind(this)
          this.addBill = this.addBill.bind(this)
     }

     getData(){
          const id = Cookies.get('IdUserName');
          Axios.get('http://localhost:216/user/id='+id).then(result =>{
              this.setState({ 
                   username: result.data[0].username,
                   name: result.data[0].namecustomer,
                   phone: result.data[0].phone, 
               })
          })
          // Axios.get('http://localhost:216/cart/id='+id).then(result => {
          //      this.setState({carts: result.data})
          // })
     }
     togglee(){
         this.setState({
              modal: !this.state.modal
         })
         this.getData()
     }
     handleonChange(event){
          this.setState ({[event.target.name]: event.target.value})
     }
     addBill(){
          const userID = Cookies.get('IdUserName');
          const nameCus = this.state.name;
          const userName = this.state.user;
          const phone = this.state.phone;
          const address = this.state.address;
          // console.log(this.state);
          // console.log(userID);
        Axios.post('http://localhost:216/addorder',{
             userID: userID,
             nameCus: nameCus,
             userName: userName,
             phone: phone,
             address: address,
          //    carts: this.state.carts 
        }) .then(result => {
               this.setState({modal: false}) ;
               // this.getData()
               Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Đơn hàng đã tạo!',
                    showConfirmButton: false,
                    timer: 1500
               })  
               Axios.get('http://localhost:216/cart/id='+Cookies.get('IdUserName')).then(res => {
                    var quantum = 0; 
                    console.log(res.data);
                    for(let i in res.data) {
                         quantum += res.data[i].quantumProduct;
                    }
                    document.getElementById('sluonggio').innerHTML = quantum
               })
        }).catch(error =>{

        })
     }

     render(){
          

          const {user, phone, username, name, address } = this.state;
          return(
               <div>
                    <button onClick={this.togglee} className='btnopen'>Lập đơn hàng</button>
                    <Modal  isOpen={this.state.modal} toggle={this.toggle} >
               <ModalHeader  toggle={this.toggle}>
                    <span className='spanHeader'>
                         Thông tin của bạn
                    </span>
                       
               </ModalHeader>    
      {
          //  user.map(user=>(
               <ModalBody>
               <Form>
                    <FormGroup>
                         <Label for="exampleEmail">Email</Label>
                         <Input onChange={this.handleonChange} type="email" name="username" id="exampleEmail" value={username}/>
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleName">Tên khách hàng</Label>
                         <Input onChange={this.handleonChange} type="text" name="name" id="exampleName"  value={name}/>
                    </FormGroup>
                    <FormGroup>
                         <Label for="examplePhone">Số điện thoại</Label>
                         <Input onChange={this.handleonChange} type="phone" name="phone" id="examplePhone"  value={phone}/>
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleAddress">Địa chỉ</Label>
                         <Input onChange={this.handleonChange} type="textarea" name="address" id="exampleAddress" placeholder="Địa chỉ của bạn"/>
                    </FormGroup>
               </Form>
          </ModalBody> 
          //  ))
      }
         
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button type='button' color="primary" onClick={this.addBill}>Xác nhận</Button>
        </ModalFooter>
      </Modal>

               </div>
          )
     }
}

export default Modals;