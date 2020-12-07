import React, {Component, Compontnet} from 'react';
import './bootstrap';
import '../styles/search.css';
import Products from './products.js';
import Axios from 'axios';
import IconSearch from '../assist/icon/loupe.svg';
import { Link, withRouter } from 'react-router-dom';
import AddCart from '../assist/icon/add.svg';
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

class Search extends Component{
     constructor(props){
          super(props)
          this.state = {
       
          } 
     }     
     


     
     render(){
          // const { products } = this.state;
          return(
               <div className='searchbar'>
                    <form onSubmit={this.props.onSubmit} className='formSearch' noValidate autoComplete="off">
                              <div className='textf'>
                                        {/* <TextField onChange={this.onChangetext} 
                                                       id="outlined-basic" label="Tìm kiếm" 
                                                       variant="outlined" name='search' 
                                                       className='txtSearch'/> */}
                                   <img src = {IconSearch} className='IconSearch'></img>
                                   <input type='search' className='txtSearch'
                                            
                                             placeholder='Tìm kiếm...'
                                             id="outlined-basic" label="Tìm kiếm" 
                                             variant="outlined" name='search'
                                   
                                   ></input>               
                             </div>
                            
                         
                    </form>
                    
                   
                

               </div>
          )
     }
}
export default Search;

          