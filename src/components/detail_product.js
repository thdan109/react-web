import React, {Component} from 'react';
import './bootstrap';
import '../styles/detail_product.css';
import axios from 'axios';
import anh from '../assist/IMG1/100-GangtaySimi.jpg';
import Cookies from 'js-cookie';
import Axios from 'axios';
import Swal from 'sweetalert2';

class Detail extends Component{

     constructor(props){
          super(props)
          this.state = {
               details:[
                    {
                         // "_id" : "5f972cec655cc9e73cfb67ea",
                         // "name" : "100% - Găng tay Simi",
                         // "type" : "dobaoho",
                         // "type-product" : "baoho",
                         // "price" : "680000",
                         // "image" : "100-GangtaySimi.jpg",
                         // "dicription" : "Da đục lỗ thoáng khí, đệm Poron tăng sự bảo vệ tối đa, chất liệu clarino tăng sự thoải mái tối đa, hàng chính hãng USA, size M / L / XL"
                     }
               ],
               count: 1
               
          }
          this.addtoCart = this.addtoCart.bind(this);
          this.increQuantum = this.increQuantum.bind(this);
          this.decreQuantum = this.decreQuantum.bind(this);
     }
     componentDidMount(){
          this.postData();
          this.getDetail();
          
     }    


     //Lấy data về
     getDetail(){
          const id = this.props.match.params.id;
          // console.log('id ne: '+id);
          axios.get('http://localhost:216/data/id='+id).then(res =>{
               this.setState({details: res.data})
          })
     }
     //Đẩy data lên server
     postData(){
          const id = this.props.match.params.id;
          // console.log('sdsadsad '+ id);
          axios.post('http://localhost:216/data/id=',id)
          .then(res =>{
               console.log(res);
          })
          .catch(error => {
               console.log(error);
          })
     }
     //Hàm thêm giỏ hàng
     addtoCart(){
        
          



          if (!Cookies.get('IdUserName')){
               Swal.fire({
                    position: 'top',
                    title: '<strong>Bạn chưa đăng nhập</strong>',
                    icon: 'info',
                    html:
                      '<b>Đăng nhập</b> để thao tác với giỏ hàng!',
                  })
               setTimeout(function(){
               }, 2000); 
               this.props.history.push('/dangnhap');
          }
          else{
               const productID = this.props.match.params.id;
               const userID = Cookies.get('IdUserName');
               const productName = this.state.details[0].name;
               const productImage = this.state.details[0].image;
               const quantumProduct = this.state.count;
               const priceProduct = this.state.details[0].price;
               // console.log(userID+"  "+productID + " "+ productName+" "+productName+" "+quantumProduct+" "+priceProduct+" ");
               Axios.post('http://localhost:216/addcart', {
                         userID: userID,
                         productID: productID,
                         nameProduct: productName,
                         imageProduct: productImage,
                         quantumProduct: quantumProduct,
                         priceProduct: priceProduct
               }).then(res =>{
                    // console.log('asdsadsa');
                    // console.log(res.data);
                    
                    if (!res.data.add){
                         Swal.fire({
                              position: 'top',
                              icon: 'error',
                              title: 'Lỗi',
                              showConfirmButton: true,
                              text: 'Mặt hàng không đủ số lượng!',
                              // footer: '<a href>Why do I have this issue?</a>'
                            })
                    } else {
                         Swal.fire({
                              position: 'top',
                              icon: 'success',
                              title: 'Đã thêm',
                              showConfirmButton: false,
                              timer: 1500
                         })
                         const id = Cookies.get('IdUserName');
                         Axios.get('http://localhost:216/cart/id='+id).then(result => {
                              var quantum = 0;
                              for(let i in result.data) {
                                   quantum += result.data[i].quantumProduct;
                              }
                              document.getElementById('sluonggio').innerHTML = quantum
                         })
                    }
                   
                    // console.log(res);              
               }).catch(error=>{
                    console.log(error);
               })
              
              
          }
     }
     //Hàm tăng số lượng
     increQuantum(){
          if (this.state.count > 7){
               this.setState({
                    count : 8
               })
          }else{
               this.setState({
                    count: this.state.count + 1
               }) 
          }
          
     }
     //Hàm giảm số lượng
     decreQuantum(){
          if (this.state.count < 2){
               this.setState({
                    count:  1
               })
          }else{
               this.setState({
                    count: this.state.count - 1
               })
          }
         
         
     }
     render(){
          const { details } = this.state;
          return(
               <div className='Detail'>
                    {details.map(detail =>(
                         <div class="container">          
                              <div class="card">
                                   <div class="container-fliud">
                                        <div class="wrapper row">
                                             <div class="preview col-md-6">
                                                  <div class="preview-pic tab-content">
                                                       <div class="tab-pane active" id="pic-1"><img src={'http://localhost:216'+detail.image} /></div> 
                                                  </div>
                                             </div>
                                             <div class="details col-md-6">
                                                       <h3 class="product-title">{detail.name}</h3>     
                                                       <p class="product-description">{detail.dicription}</p>
                                                       <p class="product-quantum">Số lượng:
                                                            <input className='inputSoluonggiam' id='increq' onClick={ this.decreQuantum} type='button' value='-' />
                                                            <input className='btnSoluong' id="inputQuantum" value={this.state.count}/>   
                                                            <input className='inputSoluongtang' id='decreq' onClick={this.increQuantum} type='button' value='+' />
                                                       </p>                                                   
                                                  <h4 class="price">Giá: <span>{(detail.price*1).toLocaleString({style:'currency', currency: 'VND'})} VNĐ</span></h4>
                                                  <div class="action">
                                                       <button onClick={this.addtoCart} class="add-to-cart btn btn-default" type="button">Thêm vào giỏ</button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>       
               ))}
               </div>
               
                    
          )
     }
}
export default Detail