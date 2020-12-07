import Axios from 'axios';
import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cookies, { get } from 'js-cookie';
import '../styles/Modalupdate.css';
import exchange from '../assist/icon/exchange.svg';
import Swal from 'sweetalert2'


class Modaladdsp extends Component{

     constructor(props){
          super(props)
          this.state={
               modal: false,
               // nameproduct:null,
               imageproduct:null,
               // typeproduct: null,
               price:null,
               // description:null,
               adproducts:[],
               id:'',
               // update:[],
              name:'',
              typeproduct:'',
              price:'',
              dicription:'' 

          }
          this.togglee = this.togglee.bind(this)
          this.handleonChange = this.handleonChange.bind(this)
          // this.getData = this.getData.bind(this)
          this.updateProduct =this.updateProduct.bind(this)
     }
     componentDidMount(){
          this.getData();
     }

     togglee(){
          this.setState({
               modal: !this.state.modal
          })
     }

     handleonChange(event){
          this.setState ({[event.target.name]: event.target.value})
     }
     
     updateProduct(){
          const id = this.props.id;
          console.log(id);
          const nameproduct = this.state.name;
          const imageproduct = this.state.imageproduct;
          const price = this.state.price;
          const typeproduct = this.state.typeproduct;
          const description = this.state.dicription;

          console.log(nameproduct, price, typeproduct, description, imageproduct);
     //      console.log(imageproduct);
          // Axios.post('http://localhost:216/updatepd',{
          //      id : id,
          //      nameproduct : nameproduct,
          //      imageproduct: imageproduct,
          //      price : price,
          //      typeproduct: typeproduct,
          //      description: description
          // })
          // .then(res =>{
          //      this.setState({modal: false}) ;
          //      if (res.data.update===true){
          //           Swal.fire({
          //                position: 'top',
          //                icon: 'success',
          //                title: 'Đã Xong!',
          //                showConfirmButton: false,
          //                timer: 1500
          //           }) 
          //           // window.location.reload(1)
          //      }else{
          //           Swal.fire({
          //                position: 'top',
          //                icon: 'error',
          //                title: 'Không thể thêm',
          //                showConfirmButton: false,
          //                timer: 1500
          //           }) 
                    
          //      // window.location.reload(1)
               
          //      }
                
               // Axios.get('http://localhost:216/product/name='+nameproduct).then(res => {
                    // var quantum = 0; 
                    // console.log(res.data);
                    // for(let i in res.data) {
                    //      quantum += res.data[i].quantumProduct;
                    // }
                    // document.getElementById('sluonggio').innerHTML = quantum
               // })
          // }).catch(error=>{

          // })
     }


     getData(){
          const id = this.props.id;
          Axios.get('http://localhost:216/data/id='+id).then(result =>{
                    // this.setState({adproducts: result.data})   
                    this.setState({
                         name: this.props.sp.name,
                         typeproduct: this.props.sp["type-product"],
                         price: this.props.sp.price,
                         dicription: this.props.sp.dicription
                         // name : result.data.name,
                         // typeproduct:result.data["type-product"],
                         // price: result.data.price,
                         // dicription: result.data.dicription
                    })  
               })       
     }
     



   
    
     
    

     
     render(){
          // console.log(this.props.id);
          // console.log(this.props.sp);
          const {name, price,typeproduct , dicription } = this.state; 
          return(
               <div>
                    <button onClick={this.togglee} className='btnopennn'>
                              <button className='btnaddProductup' >
                                     <img  className='iconup' src={exchange}/>
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
                         <Input onChange={this.handleonChange} type="text" name="name" id="exampleEmail" value={name} />
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleName">Ảnh sản phẩm</Label>
                         <Input onChange={(e)=>{
                                   this.setState({imageproduct: e.target.files[0].name})
                               }} type="file"  id="exampleName"/>
                    </FormGroup>
                    <FormGroup>
                         <Label for="examplePhone">Loại sản phẩm</Label>
                         <Input onChange={this.handleonChange} type="text" name="typeproduct" id="examplePhone" value={typeproduct}/>
                    </FormGroup>
                    <FormGroup>
                         <Label for="examplePhone">Giá sản phẩm</Label>
                         <Input onChange={this.handleonChange} type="text" name="price" id="examplePhone" value={price}  />
                    </FormGroup>
                    <FormGroup>
                         <Label for="exampleAddress">Mô tả</Label>
                         <Input onChange={this.handleonChange} type="textarea" name="dicription" id="exampleAddress" value={dicription}/>
                    </FormGroup>
               </Form>
          </ModalBody> 
          //  ))
      }
         
        <ModalFooter>

          <Button type='button' color="primary" onClick={this.updateProduct}>Cập nhật</Button>
        </ModalFooter>
      </Modal>

               </div>
          )
     }


}

export default Modaladdsp;