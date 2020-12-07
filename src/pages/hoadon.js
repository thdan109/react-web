import React, {Component} from 'react';
import '../styles/hoadon.css';
import deleteicon from '../assist/icon/trash.svg';
import { Checkbox } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Addicon from '../assist/icon/addq.svg';
import Bill from '../assist/icon/bill.svg';
import Aixos from 'axios';
import Cookies from 'js-cookie';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import 'animate.css';
import Swal from 'sweetalert2';
import Moment from 'react-moment';
// import 'moment-timezone';

class Hoadon extends Component{
     constructor(props){
          super(props)
          this.state ={
               orders: [],
          }
          // console.log(this.state.total);
     }
     componentDidMount(){
          this.postData();
          this.getData();
          if (!Cookies.get('IdUserName')){
               Swal.fire({
                    position: 'top',
                    title: '<strong>Bạn chưa đăng nhập</strong>',
                    icon: 'info',
                    html:
                      '<b>Đăng nhập</b> để thao tác với Đơn hàng!',
                  })
               //  window.location.reload();
               setTimeout(function(){
                    // window.location.reload(1);
                    // alert("5 Seconds has passed! The page will now refresh");
               }, 2000); 
               this.props.history.push('/dangnhap');
          }
          
          // console.log(Cookies.get('IdUserName'));
     }
     postData(){
          const id = Cookies.get('IdUserName');
          Axios.post('http://localhost:216/order/id=',id).then( result =>{

          }).catch(error =>{

          })
     }
     getData(){
          const id = Cookies.get('IdUserName');
          Aixos.get('http://localhost:216/order/id='+id).then(result =>{
               this.setState({ orders: result.data,
                              price: result.data.priceProduct
               })
          }).catch(error=>{

          })
     }


     render(){
        
          const { orders } = this.state;
          

          // console.log(totals);
          
          return(
              

               <div className='ContainerHoadon' > 
                   
                              <div className='ContainerTable'>
                              
                              <div className='divDauhoadon'>
                                   <span className='spanTieude'> Đơn Hàng </span>       
                              </div>
                              <div class="animate__animated animate__bounceIn" >
                                   <table className='tabledon'>
                                        <tr>
                                             <th width=''>Mã hóa đơn</th>
                                             <th width=''>Tên Hàng</th> 
                                             <th width='100px'>Số lượng</th>
                                             <th width='100px'>Giá</th>
                                             <th width='120px'>Thành tiền</th>
                                             <th width='200px'>Ngày đặt</th>
                                             <th width='200px'>Ngày giao</th>
                                             <th width='130px'>Khuyến mãi</th>
                                             <th width=''>Phí vận chuyển</th>
                                             <th width=''>Tổng tiền</th>
                                             <th width=''>Trạng thái</th>
                                        </tr>
                                        { orders.map(order =>( 
                                        <tr >
                                             <td>{order._id}</td>
                                             <td>
                                                  {(order.products).join('\r\n')}
                                             </td>
                                             <td>
                                                  {/* <input className='inputSoluonggiam' type='button' value='-' /> */}
                                                  <span>{((order.quantum).join('\r\n'))}</span>
                                                  {/* <input className='inputSoluongtang' type='button' value='+' /> */}
                                             </td>
                                             <td>{(order.priceProduct.join('\r\n')).toLocaleString({style:'currency', currency: 'VND'})}</td>
                                             <td>{(order.total).join('\r \n')} </td>
                                             
                                             <td>
                                                  
                                                       {
                                                         <Moment format="YYYY/MM/DD hh:mm:ss" date={order.dateOrder}/>

                                                       }
                                             </td>
                                             <td>
                                                  
                                                       {
                                                         <Moment format="YYYY/MM/DD hh:mm:ss" date={order.dateShip}/>

                                                       }
                                             </td>
                                             <td>{order.khuyenmai * 100} %</td>
                                             <td>30.000 VNĐ</td>
                                             <td>{
                                                  (order.ttal).toLocaleString({style:'currency', currency: 'VND'})  
                                             } VNĐ</td>
                                             
                                             <td>{order.status}</td>

                                        </tr>
                                        ))}
                                       
                                        
                                   </table>
                              </div>
                              
                              {/* { orders.map(order =>( 
                                   <div className='divTongket'> */}
                                   {/* <span>Phí vận chuyển:</span>  <span>5   </span><br/>
                                   <span>Giảm giá:</span>        <span>    </span><br/>
                                   <span>Tổng tiền:</span>       <span>    </span><br/> */}
                                    {/* { order.total.join('\n ')}
                                   </div>
                              ))}    */}
                              {/* <div className='divTongket'>
                                             <span>Phí vận chuyển:</span>  <span>5   </span><br/>
                                             <span>Giảm giá:</span>        <span>    </span><br/>
                                             <span>Tổng tiền:</span>       <span>    </span><br/>
                                             
                              </div> */}

                         </div>
                   
               
              
               </div>
          )
     }
}

export default Hoadon;