import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  '../styles/products.css';
import AddCart from '../assist/icon/add.svg';
import 'animate.css';


import {
     Container,
     Col,
     Row,
     Button,
     CardText, 
     CardBody, 
     CardTitle, 
     CardSubtitle,
     NavLink,
} from 'reactstrap';

require('dotenv').config()
const api = process.env.API_BACKEND_LINKK;

class products extends Component {
    constructor(props){
          super(props)
          this.state = {
               products: [
                    //      {
                    //      "name": "Bell Revolver EVO Optimus Hi-Viz lật hàm",
                    //      "type-product": "baoho",
                    //      "image": "Bell Revolver EVO Optimus Hi-Viz lật hàm.jpg",
                    //      "price": "4500000",
                    //      "amount": "9",
                    //      "dicription": "hàng chính hãng, size M/L/XL, 2 kính"
                    //  }
                    //  , {
                    //      "id": "0de80b3a-7c25-4358-a5f6-855a9f0570ee",
                    //      "name": "Isuzu",
                    //      "price": "$17.07M"
                    //    }, {
                    //      "id": "30469841-b55e-44df-b696-fdad3374b8af",
                    //      "name": "Nissan",
                    //      "price": "$2.81B"
                    //    }, {
                    //      "id": "fdd8cb68-eef4-40f8-8fcd-44c7aaeb895e",
                    //      "name": "Lamborghini",
                    //      "price": "$74.51M"
                    //    }, {
                    //      "id": "ff63c756-a93f-46ac-8729-142c08f0de1b",
                    //      "name": "Mitsubishi",
                    //      "price": "n/a"
                    //    }, {
                    //      "id": "9ca1b515-0c66-4ff6-b0c1-0918b6973785",
                    //      "name": "Nissan",
                    //      "price": "$68.38M"
                    //    }, {
                    //      "id": "91004b83-0e86-43bd-8999-de0c2ce53423",
                    //      "name": "Nissan",
                    //      "price": "$153.44M"
                    //    }, {
                    //      "id": "48865e85-0f0e-473c-8342-abb4c04ac075",
                    //      "name": "Cadillac",
                    //      "price": "$581.4M"
                    //    }, {
                    //      "id": "195eac2e-933b-448f-8ba7-7198ac8c589b",
                    //      "name": "Aston Martin",
                    //      "price": "n/a"
                    //    }, {
                    //      "id": "fbb5cf0b-8b6d-4193-885a-de3c9b8f003a",
                    //      "name": "Mitsubishi",
                    //      "price": "$25.09B"
                    //    }, {
                    //      "id": "746f6963-14fe-43ae-a4c6-04d9d4100afd",
                    //      "name": "Chevrolet",
                    //      "price": "$46.33B"
                    //    }
               ]  
                     
          }
     }
     componentDidMount() {
          this.getData();
                         
     }

     componentDidUpdate(PrevProps) {
          if(PrevProps.type != this.props.type) {
               this.getData();
          }

          if(PrevProps.products != this.props.products) {
               this.setState({
                    products : this.props.products
               })
          }
     }
     getData() {
          // console.log(this.props.type);
          if(!this.props.type) {
               axios.get('http://localhost:216/data').then(result =>{
                    this.setState({products: result.data})
               })
          } else {
               const type = this.props.type;
               axios.get('http://localhost:216/data/type='+type).then(result =>{
                    this.setState({products: result.data})
               })
          }
          
     }
     
   

     render(){
         const products = this.state.products;
     //     console.log(api);
     // console.log(products);
          return (
              
               <Container > 
                    <Row>
                         { products.map(product =>(                            
                              <Col sm="4">
                                  <div class="animate__animated animate__bounceIn" >
                                        <div className="Card-product" >
                                             <Link className='linkbt' to={'/detail/'+product._id}>
                                                  <div className='ImgProduct'>
                                                       <img top  src={'http://localhost:216' + product.image} alt="Card image cap" />
                                                  </div>
                                             </Link>    
                                             <div className='Card-Infor'>
                                                       <CardTitle className='Name-Product'>{product.name}</CardTitle>
                                                            {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                                                 <div className='bt-card'>
                                                                      <CardText className='Price-Product'>{(product.price*1).toLocaleString({style:'currency', currency: 'VND'}) +' VND'}</CardText>   
                                                                      {/* <Button className='BtAddCart'>
                                                                           <div className='Bticon'>
                                                                                <img  src={AddCart}></img>
                                                                                Thêm giỏ
                                                                           </div>           
                                                                      </Button>  */}
                                                                 </div>
                                                            {/* </CardBody> */}         
                                             </div> 
                                        </div>
                                  </div>
                                       
                                  
                                       
                              </Col>
                         ))}  
                    </Row>
                   
               </Container>
    
              
              
          );
     }
};
export default products;