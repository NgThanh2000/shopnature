import React from "react";
import Home from './component/home/home';
import Header from "./component/header";
import Footer from "./component/footer";
// import NewProduct from "./component/newProduct";
import {
  Routes,
  Route,

} from "react-router-dom";

import AddToCard from './component/addToCard/addToCard';
import DetailProduct from './component/detailProduct';
import Nopage from './component/nopage';


import Description from './component/sub_detailProduct/description';
import Info from './component/sub_detailProduct/info';
import Review from './component/sub_detailProduct/review';
function App() {


  return (
  
    <div className="App">
      <Header />
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/addToCard" element={<AddToCard />} />
            <Route path="*" element={<Nopage />} />
            <Route path ="/:name/:id" element={<DetailProduct />}/>
            {/* <Route path='/des' element={<Description/>} />
            <Route path='/info' element={<Info/>} />
            <Route path ='/review' element={<Review/>}/> */}
        </Routes>
      <Footer />  
    </div>

  );
}
export default App;

