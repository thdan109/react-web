import React, { Component } from 'react';
import axios from 'axios';

import  '../styles/products.css';

import {
     Container,
     Col,
     Row,
     Button,
     Card, 
     CardImg, 
     CardText, 
     CardBody, 
     CardTitle, 
     CardSubtitle
} from 'reactstrap';

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

     getData() {
          axios.get('http://localhost:216/data').then(result =>{
               this.setState({products: result.data})
          })
     }

     render(){
         const { products } = this.state;
          return (
               <Container>
                    <Row>
                         { products.map(product =>(                             
                              <Col sm="4">
                                   <div className="Card-product">
                                        <div className='ImgProduct'>
                                             <img top width="100%"  src={require('../assist/IMG1/'+product.image).default} alt="Card image cap" />
                                        </div>
                                       <div className='Card-Infor'>
                                             {/* <CardBody>      */}
                                                  <CardTitle>{product.name}</CardTitle>
                                                  {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                                  <CardText>{product.price}</CardText>
                                                  <Button>Thêm giỏ</Button>
                                             {/* </CardBody> */}
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