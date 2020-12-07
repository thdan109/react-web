import Axios from 'axios';
import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cookies from 'js-cookie';
import '../styles/modal.css';
import add from '../assist/icon/addadsp.svg';
import Swal from 'sweetalert2'


class Modaladdsp extends Component{

     constructor(props){
          super(props)
          this.state={
               modal: false,
               nameproduct:null,
               imageproduct:null,
               typeproduct: null,
               price:null,
               description:null,
          }
          this.togglee = this.togglee.bind(this)
          this.handleonChange = this.handleonChange.bind(this)
          this.addProduct = this.addProduct.bind(this)
          // this.handleonChangeFile = this.handleonChangeFile(this)
     }

     togglee(){
          this.setState({
               modal: !this.state.modal
          })
          
     }

     
     handleonChange(event){
          this.setState ({[event.target.name]: event.target.value})
     }
     addProduct(){
          const nameproduct = this.state.nameproduct;
          const imageproduct = this.state.imageproduct;
          const price = this.state.price;
          const typeproduct = this.state.typeproduct;
          const description = this.state.description;

          console.log(nameproduct, price, typeproduct, description);
          console.log(imageproduct);
          Axios.post('http://localhost:216/addproduct',{
               nameproduct : nameproduct,
               imageproduct: imageproduct,
               price : price,
               typeproduct: typeproduct,
               description: description
          }).then(res =>{
               this.setState({modal: false}) ;
               if (res.data.del===false){
                    Swal.fire({
                         position: 'top',
                         icon: 'error',
                         title: 'Không thể thêm',
                         showConfirmButton: false,
                         timer: 1500
                    }) 
                   
               }else{
                    Swal.fire({
                         position: 'top',
                         icon: 'success',
                         title: 'Đã Thêm!',
                         showConfirmButton: false,
                         timer: 1500
                    }) 
               window.location.reload(1)
               
               }
                
               // Axios.get('http://localhost:216/product/name='+nameproduct).then(res => {
                    // var quantum = 0; 
                    // console.log(res.data);
                    // for(let i in res.data) {
                    //      quantum += res.data[i].quantumProduct;
                    // }
                    // document.getElementById('sluonggio').innerHTML = quantum
               // })
          }).catch(error=>{

          })
     }



     
     render(){
          // const name = this.state.imageproduct;
          // console.log(name);

          // const {user, phone, username, name, address } = this.state;
          return(
               <div>
                    <button onClick={this.togglee} className='btnopenn'>
                              <button  className='btnaddProductAd'>
                                   <img  className='iconadd' src={add}/>  Thêm sản phẩm
                             
                              </button>
                         </button>
                    <Modal  isOpen={this.state.modal} toggle={this.toggle} >
               <ModalHeader  toggle={this.toggle}>
                    <span className='spanHeader'>
                         Thông tin sản phẩm
                    </span>
                       
               </ModalHeader>    
      {
          //  user.map(user=>(
               <ModalBody>
               <Form>
                    <FormGroup>
                         <Label for="exampleEmail">Tên sản phẩm</Label>
                         <Input onChange={this.handleonChange} type="text" name="nameproduct" id="exampleEmail" />
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleName">Ảnh sản phẩm</Label>
                         <Input onChange={(e)=>{
                                   this.setState({imageproduct: e.target.files[0].name})
                               }} type="file"  id="exampleName"/>
                    </FormGroup>
                    {/* <FormGroup>
                         <Label for="examplePhone">Số lượng</Label>
                         <Input onChange={this.handleonChange} type="text" name="quantum" id="examplePhone" />
                    </FormGroup> */}
                    <FormGroup>
                         <Label for="examplePhone">Loại sản phẩm</Label>
                         <Input onChange={this.handleonChange} type="text" name="typeproduct" id="examplePhone" />
                    </FormGroup>
                    <FormGroup>
                         <Label for="examplePhone">Giá sản phẩm</Label>
                         <Input onChange={this.handleonChange} type="text" name="price" id="examplePhone"  />
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleAddress">Mô tả</Label>
                         <Input onChange={this.handleonChange} type="textarea" name="description" id="exampleAddress" />
                    </FormGroup>
               </Form>
          </ModalBody> 
          //  ))
      }
         
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          <Button type='button' color="primary" onClick={this.addProduct}>Thêm sản phẩm</Button>
        </ModalFooter>
      </Modal>

               </div>
          )
     }


}

export default Modaladdsp;