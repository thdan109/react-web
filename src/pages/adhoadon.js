import React, {Component} from 'react';
import '../styles/adhoadon.css';

import deleteicon from '../assist/icon/trash.svg'

import Axios from 'axios';
import Moment from 'react-moment';

class Adhoadon extends Component{
     constructor(props)
     {
          super(props)
          this.state={
               adorder:[],
               valueKM:''
          }
     
       this.Choosestatus = this.Choosestatus.bind(this)  
       this.delorderAd = this.delorderAd.bind(this)
       this.submitKM = this.submitKM.bind(this)
       this.handleChange = this.handleChange.bind(this)
     }
     componentDidMount(){
          this.getData()
     }
     getData(){
          Axios.get('http://localhost:216/order').then(result=>{
               this.setState({adorder: result.data})
          })
     }
     Choosestatus(e,id){
          Axios.post('http://localhost:216/adupdatecart',{id: id, status: e}).then(result=>{
               this.getData();
          })

     }
     handleChange(event) {
          this.setState({valueKM: event.target.value});
     }

     submitKM(id){
          const km = this.state.valueKM;
          Axios.post('http://localhost:216/kmorder',{id: id, km: km}).then(res =>{
               this.getData()
          })


         
     }

    delorderAd(id){
         console.log(id);
         Axios.get('http://localhost:216/dorder/id='+id).then(data=>{
              this.getData()
         })
    }


     render(){
          const {adorder} = this.state;
          return(
               <div className='divAdhoadon'>
                    <div className='Adhoadon'>
                         <h4>Hóa Đơn</h4>

                         <div className='divTableAdhoadon'>
                              <table >
                                   <tr>
                                        <th width='200px'>Tên khách hàng</th>
                                        <th width='280px'>Mã hóa đơn</th>
                                        <th width='500px'>Sản phẩm</th>                                 
                                        <th width='110px'>Số lượng</th>
                                        <th width='180px'>Tiền</th>
                                        <th width='220px'>Ngày đặt</th>
                                        <th width='220px'>Ngày giao</th>
                                        <th width='120px'>Giảm giá</th>
                                        <th width='200px'>Thành tiền</th>
                                        <th width='200px'>Trạng thái</th>
                                        <th width='20px'></th>
                                   </tr>
                                   {
                                        adorder.map(ador=>(
                                             <tr>
                                                  <td>{(ador.nameCus)}</td>
                                                  <td>{ador._id}</td>
                                                  <td>{(ador.products).join('\r\n')}</td>
                                                  <td className='tdGiamgia'>{(ador.quantum).join('\r\n')}</td>
                                                  <td>{(ador.totalod.toLocaleString({style:'currency', currency: 'VND'}))} VNĐ</td>
                                                  <td>
                                                  
                                                       {
                                                         <Moment format="YYYY/MM/DD hh:mm:ss" date={ador.dateOrder}/>

                                                       }
                                                  </td>
                                                  <td>
                                                       
                                                       {
                                                            <Moment format="YYYY/MM/DD hh:mm:ss" date={ador.dateShip}/>

                                                       }
                                                  </td>
                                                  <td className='tdGiamgia'>
                                                       <input className='inputKM' type='text' value= {(ador.khuyenmai)*100 +'%'}></input><br/>
                                                      
                                                            
                                                            <input className='inputKM' name='gtkm' type='number'  onChange={this.handleChange}></input> 
                                                            <input className='inputSM' type="submit" value="Submit" onClick={()=>this.submitKM(ador._id)} />

                                                     
                                                              
                                                            
                                                  </td>
                                                  <td>{(ador.ttal.toLocaleString({style:'currency', currency: 'VND'}))} VNĐ</td>
                                                  <td className='tdselect'> 
                                                  <input className='inputstatus' type='text'  value={ador.status}></input>
                                                       <select name='' onChange={(e)=>this.Choosestatus((e.target.value),ador._id)}>
                                                            <option id='1' value='Chờ xác nhận'>Chờ xác nhận</option>
                                                            <option id='2' value='Đã xác nhận'>Đã xác nhận</option>
                                                            <option id='3' value='Chờ vận chuyển'>Chờ vận chuyển</option>
                                                            <option id='4' value='Đang vận chuyển'>Đang vận chuyển</option>
                                                            <option id='5' value='Đã giao'>Đã giao</option>
                                                       </select>

                                                  </td>
                                                  <td>
                                                            {
                                                                 (ador.status === 'Đã giao')?
                                                                 <img onClick={()=>this.delorderAd(ador._id)} className='icon' src={deleteicon}/>
                                                                 :
                                                                 <img></img>
                                                            }
                                                                                                    
                                                  </td>
                                             </tr>
                                        ))
                                   }
                              
                                       


                              </table>

                         </div>



                    </div>
               </div>
               
          )
     }

}

export default Adhoadon