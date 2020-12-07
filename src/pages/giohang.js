import React, {Component} from 'react';
import '../styles/giohang.css';
import './hoadon.js';
import checkicon from '../assist/icon/check.svg';
import deleteicon from '../assist/icon/trash.svg';
import { Checkbox } from '@material-ui/core';
import {Link, Route, Router} from 'react-router-dom';
import Addicon from '../assist/icon/addq.svg';
import Bill from '../assist/icon/bill.svg';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import Axios from 'axios';
import Modals from '../components/Modal.js';
import 'animate.css';

class Giohang extends Component{
     constructor(props){
          super(props)
          this.state ={ 
               carts:[
               ],
              ttalod: ''
          }
          this.delProduct = this.delProduct.bind(this)
          this.changeQuantum = this.changeQuantum.bind(this)
         
     }
   
     
     componentDidMount(){
          //console.log("aaa");

          this.postData();
          this.getData();
          if (!Cookies.get('IdUserName')){
               Swal.fire({
                    position: 'top',
                    title: '<strong>Bạn chưa đăng nhập</strong>',
                    icon: 'info',
                    html:
                      '<b>Đăng nhập</b> để thao tác với giỏ hàng!',
                  })
               //  window.location.reload();
               setTimeout(function(){
                    // window.location.reload(1);
                    // alert("5 Seconds has passed! The page will now refresh");
               }, 2000); 
               this.props.history.push('/dangnhap');
          }
          // console.log(this.state);
          // else if (this.state.carts.length===0){
          //      Swal.fire({
          //           position: 'top',
          //           title: '<strong>Giỏ trống</strong>',
          //           icon: 'info',
          //           html:
          //             '<b>Giỏ trống hãy thêm sản phẩm vào!</b>',
          //         })
          //      //  window.location.reload();
          //      setTimeout(function(){
          //           // window.location.reload(1);
          //           // alert("5 Seconds has passed! The page will now refresh");
          //      }, 2000); 
          //      this.props.history.push('/sanpham');  
          
          // }


         
          
     }
     componentDidUpdate(){
          this.getData()
          // console.log("aaa");

     }
     //Gửi dữ liệu
     postData(){
          const id = Cookies.get('IdUserName');
          // console.log('asdasdasda'+id);
          Axios.post('http://localhost:216/cart/id='+id).then(result =>{
                    
                 
          }).catch(error=>{

          })
     }
     //Lấy dữ liệu
     getData(){
          const id = Cookies.get('IdUserName');
          Axios.get('http://localhost:216/cart/id='+id).then(result => {
               this.setState({carts: result.data})
          })
     }
     //Xóa sản phẩm khỏi giỏ hàng
     delProduct(id){
          // const iddel = id;
          // console.log(iddel);
          Axios.post('http://localhost:216/dcart/id='+id).then(result =>{
               this.getData()
               // console.log("aaa");
               Axios.get('http://localhost:216/cart/id='+Cookies.get('IdUserName')).then(res => {
                    var quantum = 0; 
                    console.log(res.data);
                    for(let i in res.data) {
                         quantum += res.data[i].quantumProduct;
                    }
                    document.getElementById('sluonggio').innerHTML = quantum
               })
          }).catch(error=>{
                  
          })   
     }
     //Tăng số lượng và update
     changeQuantum(id, num ){
          Axios.post('http://localhost:216/cartupdate', {id: id, num: num}).then(result =>{
               this.getData();
               Axios.get('http://localhost:216/cart/id='+Cookies.get('IdUserName')).then(res => {
                    var quantum = 0; 
                    console.log(res.data);
                    for(let i in res.data) {
                         quantum += res.data[i].quantumProduct;
                    }
                    document.getElementById('sluonggio').innerHTML = quantum
               })
          })
          
     }
     //Hàm giảm số lượng và update
  

     render(){
         
          const {carts} = this.state;
          let totalod = 0;
          for(var i of carts){
               totalod += i.total;   
          }
          return(
              
               <div className='ContainerGiohang'> 
               {
                    (carts.length===0 )?
                    <div className='ContainerTable'>
                          <div className='divDaugiohang1'>
                              <span className='spanTieude'> Giỏ hàng </span> 
                              <span className='spanDonhang'>
                                   
                                   <Link className='link' to='/hoadon'>    
                                        {/* <img className='iconDonhang' src={Bill} /> */}
                                   Xem Đơn hàng
                                   </Link>   
                              </span>  
                                  
                         </div>
                         <h5>Giỏ hàng trống!</h5> 
                    </div> :


                    <div className='ContainerTable'>
                         <div className='divDaugiohang1'>
                              <span className='spanTieude'> Giỏ hàng </span> 
                              <span className='spanDonhang'>
                                   <Link className='link' to='/hoadon'>    
                                        {/* <img className='iconDonhang' src={Bill} /> */}
                                        Đơn hàng
                                   </Link>   
                              </span>       
                         </div>
                         <div class="animate__animated animate__bounceIn" >
                              <table className='tablegio'>
                                   <tr>
                                        {/* <th width='100px'></th> */}
                                        <th>Tên Hàng</th>
                                        <th width='150px'>Ảnh</th>
                                        <th width='150px'>Số lượng</th>
                                        <th width='200px'>Giá</th>
                                        <th width='220px'>Tổng tiền</th>
                                        <th width='100px'></th>
                                   </tr>
                                   { carts.map(cart=>(
                                             <tr>
                                                  <td>{cart.nameProduct}</td>
                                                  <td>
                                                       <img className='imgProductcart' src={'http://localhost:216'+cart.imageProduct} />
                                                  </td>
                                                  <td>
                                                                 {
                                                                      (cart.quantumProduct === 1 ) 
                                                                      ? <input className='inputSoluonggiam' disabled="true" onClick={()=>this.changeQuantum(cart._id, -1)}  type='button' value='-' />
                                                                      : <input className='inputSoluonggiam'  onClick={()=>this.changeQuantum(cart._id, -1)}  type='button' value='-' />
                                                                 }
                                                                 <input className='inputSoluong' value={cart.quantumProduct}/>
                                                                 {
                                                                      (cart.quantumProduct === 8 ) 
                                                                      ? <input className='inputSoluongtang' disabled="true" onClick={()=>this.changeQuantum(cart._id, +1)}  type='button' value='+' />
                                                                      : <input className='inputSoluongtang'  onClick={()=>this.changeQuantum(cart._id, +1)}  type='button' value='+' />
                                                                 }
                                                  </td>
                                                  <td>{ (cart.priceProduct*1).toLocaleString({style:'currency', currency: 'VND'}) } <span className='spanVND'>VNĐ</span> </td>
                                                  <td>
                                                       { (cart.total).toLocaleString({style:'currency', currency: 'VND'}) }  <span className='spanVND'>VNĐ</span>
                                                  </td>
                                                  <td>
                                                            <img onClick={()=>this.delProduct(cart._id)} className='icon' src={deleteicon}/>                                        
                                                  </td>
                                             </tr>
                                        ))
                                   }
                              </table>
                              <h5 className='tongtiengio'>Tổng tiền giỏ: <span>{(totalod).toLocaleString({style:'currency', currency: 'VND'}) } VNĐ</span></h5>
                         </div>
                         

                         

                         {/* <Link to= '/hoadon'> */}
                              <div className='btnThanhtoan'>
                                   <Modals width='220px' height='50px' /> 
                              </div>
                             
                              
                              {/* <button className='btnThanhtoan'>Thanh toán</button> */}
                         {/* </Link> */}
                    </div>
               }
                    
                    
                              
                
                   
               </div>
          )
          
     }
}

export default Giohang;