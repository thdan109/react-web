import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav, NavbarBrand, Collapse, NavItem} from 'reactstrap';
import Axios from 'axios';
import Pagination from '../components/pagination';
import Products from '../components/products.js';
import '../styles/sanpham.css';
import Search from '../components/search_form.js';
import products from '../components/products.js';


class Sanpham extends Component{
     constructor(props){
          super(props)
          this.state={
               products:[

               ],
               product1:[

               ],
               productTemp: [],
               type: "",
               number:1
          }
          this.onSubmit = this.onSubmit.bind(this)
          this.clickPag = this.clickPag.bind(this)
          this.getData = this.getData.bind(this)
     }
     componentDidMount(){
          this.getData();
          console.log(this.props.match.params.type);
     }
     componentDidUpdate(){
          if(this.state.type !=this.props.match.params.type ) {
               this.getData()
               // console.log(this.props.match.params.type);
          }
     }
    
     onSubmit(event){
          event.preventDefault();
          const key = event.target.search.value;
          // this.props.history.push('/products/search?q=' + key)
          // window.localtion.href = "/searchProduct?q=" + key
          console.log('sadasdsadasdasda'+key);
          if (key === ''){
               this.setState({ products : ''})
          }else{
               Axios.get('http://localhost:216/search/key='+key).then(res =>{
                    this.setState({ products : res.data})
               
               }).catch(error =>{
                    
               })
          }
          
         
          
     }
    
     clickPag(e){
          e.preventDefault();
          const num = e.target.value;
          this.setState({number : Number(num)}) 
          this.getData();
     }
    

     getData(){        
          if(!this.props.match.params.type) {
               Axios.get('http://localhost:216/data').then(result =>{
                    this.setState({product1: result.data,
                         productTemp: result.data,
                         type: this.props.match.params.type,
                    })
                   
               })
          } else {
               const type = this.props.match.params.type;
               Axios.get('http://localhost:216/data/type='+type).then(result =>{
                    this.setState({product1: result.data,
                         productTemp: result.data,
                         type: this.props.match.params.type,

                    })
                    
               })
          }
          
     }

     render(){
          console.log(this.state.products);
          const product1 = this.state.productTemp;
          const limit = 9;
          let array = [];
          let page;
          const numpage =  this.state.number;
          if((numpage!==0)) {
               page = numpage;
               
               const start = (page-1) * limit;
               const tt = product1.length;
               for(let i=start ; i<start+limit && i<tt ; i++) {
                    array.push(product1[i]);
               }
          }else{
               page = 1;
          }
          const pages = Math.ceil(product1.length/limit);          
          let numberpage = [];
          for (let i=page-1 ; i<page+2 ; i++  ){
               if ((i > 0) && (i<=pages)) {
                    numberpage.push(i);
               }
          }
          // console.log(array);
          // console.log(numberpage);


          return(
                         <div className="PhXe">
                              <h3>
               
                              </h3>
                              <Search onSubmit={this.onSubmit} />

                              <div className="TypeProduct">  
                                   {/* <Nav light expand="mt">                             */}
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/kinhchieuhau'>
                                                  <NavbarBrand className='navbarbrandlink'> 
                                                       Kính Chiếu Hậu
                                                  </NavbarBrand>               
                                             </Link>
                                        
                                   
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/dauden'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Đèn Xe
                                                  </NavbarBrand >        
                                             </Link>
                                   
                                   
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/banhxe'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Vỏ Xe
                                                  </NavbarBrand> 
                                             </Link>                           
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/mamxe'>
                                                  <NavbarBrand className='navbarbrandlink'> 
                                                       Mâm Xe
                                                  </NavbarBrand>               
                                             </Link>
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/binhdau'>
                                                  
                                                       <NavbarBrand className='navbarbrandlink'>
                                                       Bình Dầu
                                                       </NavbarBrand>
                                             </Link>
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/baoho'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Đồ Bảo Hộ
                                                  </NavbarBrand>
                                             </Link>                              
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/nonbaohiem'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Mũ Bảo Hộ
                                                  </NavbarBrand>
                                             </Link>
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/boxe'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Bô Xe
                                                  </NavbarBrand>
                                             </Link>
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/cumcongtac'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Cùm Công Tắc
                                                  </NavbarBrand>
                                             </Link>
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/ghidong'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Ghi Đông
                                                  </NavbarBrand>
                                             </Link>             
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/giadodienthoai'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Giá Đỡ Điện Thoại
                                                  </NavbarBrand>
                                             </Link>
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/guxe'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Gù Xe
                                                  </NavbarBrand> 
                                             </Link>
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/kinhchangio'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Kính Chắng Gió
                                                  </NavbarBrand>    
                                             </Link>
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/taycon'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Tay Công
                                                  </NavbarBrand> 
                                             </Link>     
                                             <Link className="LinkTypeProduct" to='/sanpham/loai/troluc'>
                                                  <NavbarBrand className='navbarbrandlink'>
                                                       Trợ lực Xe
                                                  </NavbarBrand>                     
                                             </Link>  
                                   {/* </Nav> */}
                              </div>

                              <div  className='showproduct'>
                                   {    
                                             (this.state.products.length !== 0)?
                                             <Products products={this.state.products}/>
                                             :
                                             (numpage!==0)?
                                             <Products products={array}/>
                                             :((page) && (this.props.match.params.type))?
                                              <Products products={array} type={this.props.match.params.type}/>
                                             :
                                             <Products products={this.state.products} type={this.props.match.params.type} />
                                   }
                                 
                                   {/* <Products products={this.state.products}  type={this.props.match.params.type} /> */}
                              </div>
  
                              <div className='parent-pagination'>   
                         

                                   <div className='pagination'>
                                             <button id='previous' className='nhanbtt' name='previous' value={0}>&laquo;</button>
                                        {
                                             numberpage.map(page => (
                                                  <button   onClick={this.clickPag}  className='active' name='o1' id='o1' value={page}>{page}</button>
                                             
                                             ))
                                        }
                                             <button   className='active' id='next' className='nhanbtt' name='next'value={0}>&raquo;</button>
                                   </div>
                              </div> 
                         </div>
               
          )
     }
}
export default Sanpham;