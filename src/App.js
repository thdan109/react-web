

import React,  {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Carosel from './components/carosel.js'; 
import Sanpham from './pages/sanpham.js';
import Dangnhap from './pages/dangnhap.js';
import Dangky from './pages/dangky.js';
import Tesst from './pages/test';
import Giohang from './pages/giohang.js';
import Hoadon from './pages/hoadon.js';
// import Dobaoho from './pages/dobaoho.js';
import Detail from './components/detail_product.js';
import Search from './components/search_form.js';

import Adheader from './pages/adindex.js';
import Adsanpham from './pages/adsanpham.js';
import  Adhoadon from './pages/adhoadon.js';

import 'animate.css';
import Cookies from 'js-cookie';
class App extends Component{
     render() {
          return(
               (Cookies.get('Admin'))?
                    <Router>
                         <div>
                              <Adheader/>

                              <Route path='/sanpham' exact component={Adsanpham}/>

                              <Route path='/hoadon' exact component={Adhoadon}/>


                              {/* <Route path='/' exact component={Adheader}/> */}
                              {/* sadasdsadas      */}
                              <Route path='/dangnhap' exact component={Dangnhap}/>
                              
                         </div>     
                         

                    </Router>
               :
               <Router>
                    <div className="pkienxe">  
                    
                              <Header/>
                              {/* <Search/> */}
                              {/* <Route path='/admin' exact component={Admin}/>      */}
                              <Route path='/' exact  component={Carosel}/>
                              <Route path='/sanpham' exact component={Sanpham}/>
                              <Route path='/sanpham/page=:page' exact component={Sanpham}/>
                              <Route path='/sanpham/loai/:type' exact component={Sanpham}/>
                              <Route path='/sanpham/loai/:type/page=:page' exact component={Sanpham}/>
                              <Route path='/detail/:id' exact component={Detail}/>
                              <Route path='/dangnhap' exact component={Dangnhap}/>
                              <Route path='/dangky' exact component={Dangky}/>
                              <Route path='/giohang' exact component={Giohang}/>
                              <Route path='/hoadon' exact component={Hoadon} />
                              {/* <Tesst/> */}
                              <Footer/>                         
                    </div>
               </Router>
               
                   
             
           )
     }
}
export default App;
