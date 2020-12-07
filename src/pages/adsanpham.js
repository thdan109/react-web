import Axios from 'axios';
import React, { Component } from 'react';
import FilterResults from 'react-filter-search';
import Modaladdsp from '../components/Modaladdsp.js';
import Modalupdate from '../components/Modalupdateproduct.js';
import '../styles/adsanpham.css';
import exchange from '../assist/icon/exchange.svg';
import deleteicon from '../assist/icon/trash.svg';



class Adsanpham extends Component{

     constructor(props){
          super(props)
          this.state ={
               adproducts:[],
               searchproducts: [],
               number:1,
               id:''
          
          }
          this.clickPagad = this.clickPagad.bind(this)
          this.delProduct = this.delProduct.bind(this)
          this.onChangeSearch = this.onChangeSearch.bind(this)
     }

     componentDidMount(){
          this.getData()
     }

     getData(){
          
          Axios.get('http://localhost:216/data').then(result =>{
                    this.setState({adproducts: result.data})   
               })


          
     }

     clickPagad(e){
          e.preventDefault();
          const num = e.target.value;
          this.setState({number : Number(num)}) 
          this.getData();
          // console.log(num);
     }

     delProduct(id){
          Axios.get('http://localhost:216/dproduct/id='+id).then(res =>{
               this.getData();

          })
          // console.log(id);
     }
     
     onChangeSearch(e){
          // this.setState({search : e.target.value})
          console.log(e.target.value);
          const key = e.target.value;
          if (key===''){
               this.setState({ searchproducts :''})
          }else{
               Axios.get('http://localhost:216/search/key='+key).then(res =>{
                    this.setState({ searchproducts : res.data})
                    this.getData()
               }).catch(error =>{
                    
               })
          }
          
     }


     render(){
          const searchpr = this.state.searchproducts;  
          const adproducts = this.state.adproducts;
          const limit = 10;
          let page ;
          const numpage =  this.state.number;
          let array = [];
          if (numpage && adproducts.length!=0){
               page = numpage;
               const start = (page-1)*limit;
               const tt = adproducts.length;
               for ( let i = start ; i<start  + limit && i<tt ; i++){
                    array.push(adproducts[i])
               }
          }else{
               page=1
          }
          const pages = Math.ceil(adproducts.length/limit);  
          let numberpage = [];
          for (let i=page-1 ; i<page+2 ; i++  ){
               if ((i > 0) && (i<=pages)) {
                    numberpage.push(i);
               }
          }

          


          return(
               <div className='divadsanpham'>
                    <h3>Sản Phẩm</h3>

                    <div className='divSearch'>
                         <input className='inputsead' typep='text' onChange={this.onChangeSearch}></input>
                    </div>

                    <div  className='icona'>
                         <Modaladdsp /> 
                    </div>
                   <div className='divTabl'>

                         <table >
                              <tr>
                                       
                                        <th width='600px'>Tên sản phẩm</th>
                                        <th width='250px'>Ảnh sản phẩm</th>  
                                        <th width='180px'>Loại sản phẩm</th>   
                                        <th width='180px' >Số lượng</th> 
                                        <th width='280px'>Giá</th>    
                                        <th width='130px'></th>
                                        <th width='130px'></th>

                              </tr>
                                        {    
                                             
                                             (searchpr.length !== 0)?
                                                  searchpr.map(sp => (
                                                       <tr>
                                                            <td >{sp.name}</td>
                                                            <td >
                                                                 <img className='imgProductcart' src={'http://localhost:216'+sp.image} />
                                                            </td>
                                                            <td >{sp["type-product"]}</td>
                                                            <td>8</td>
                                                            <td >{sp.price}</td>
                                                            <td> 
                                                            <div className='action' >
                                                                      <Modalupdate id={sp._id}  sp={sp} />
                                                                      {/* <img className='iconn' onClick={()=> this.delProduct(sp._id)} src={deleteicon}/>   */}
                                                            </div>
                                                            </td>
                                                            <td>
                                                                      <img className='iconn' onClick={()=> this.delProduct(sp._id)} src={deleteicon}/>  
                                                            </td>
                                                       </tr>
                                                  ))
                                             
                                             :(array.length === 0 )?
                                                  adproducts.map(sp => (
                                                       <tr>
                                                            <td >{sp.name}</td>
                                                            <td >
                                                                 <img className='imgProductcart' src={'http://localhost:216'+sp.image} />
                                                            </td>
                                                            <td >{sp["type-product"]}</td>
                                                            <td>8</td>
                                                            <td >{sp.price}</td>
                                                            <td> 
                                                                <div className='action' >
                                                                      <Modalupdate id={sp._id}  sp={sp} />
                                                                      {/* <img className='iconn' onClick={()=> this.delProduct(sp._id)} src={deleteicon}/>   */}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                      <img className='iconn' onClick={()=> this.delProduct(sp._id)} src={deleteicon}/>  
                                                            </td>
                                                       </tr>
                                                  ))

                                             :
                                        
                                                  array.map(sp => 
                                                       (    
                                                            <tr>
                                                                 <td >{sp.name}</td>
                                                                 <td >
                                                                      <img className='imgProductcart' src={'http://localhost:216'+sp.image} />
                                                                 </td>
                                                                 <td >{sp["type-product"]}</td>
                                                                 <td>8</td>
                                                                 <td >{sp.price}</td>
                                                                 <td> 
                                                                      <div className='action'>
                                                                           <Modalupdate id={sp._id}  sp={sp} />
                                                                      </div>
                                                                     
                                                                      {/* <img className='icon' src={exchange}/>   */}
                                                                       
                                                                 </td>
                                                                 <td>
                                                                      <img className='iconn' onClick={()=> this.delProduct(sp._id)} src={deleteicon}/>  
                                                                 </td>
                                                            </tr>
                                                  )
                                                  )
                                             
                                             
                                        }    
                         </table>
                    </div>         

                    <div className='parent-pagination'>   
                         <div className='pagination'>
                                    <button id='previous' className='nhanbtt' name='previous' value={0}>&laquo;</button>
                                    {/* <button   onClick={this.clickPagad}  className='active' name='o1' id='o1' value={1}>1</button>      
                                    <button   onClick={this.clickPagad}  className='active' name='o1' id='o1' value={2}>2</button>                                         */}
                                   {
                                        numberpage.map(page => (
                                             <button   onClick={this.clickPagad}   name='o1' id='o1' value={page}>{page}</button>                                        
                                        ))
                                   }
                                   <button   className='active' id='next' className='nhanbtt' name='next'value={0}>&raquo;</button>
                         </div>
                    </div> 
               </div>


          )
     }





}

export default Adsanpham;


