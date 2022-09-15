import React from 'react';
import {
    Link,
  } from "react-router-dom";
import { useState,useEffect } from "react";
import { connect } from 'react-redux';
import { actGetDaTaWoo } from '../actions/actions';
import Woocommerce from '../query/woo';
import Rating from '@mui/material/Rating';

function Uoo(props){
   
    // console.log(Woocommerce.getCategories());
    // console.log(props.finishDaTaWoo);

    const [product, setProducts] = useState([]);
    // const dispatch = useDispatch();
    useEffect(() => {
        Woocommerce.getProducts().then(function(response) {
            setProducts(response.data);
            //console.log(response.data);
            // if(response.data != null) {
               props.dispatchProduct(response.data);   
            // }   
            // dispatch(actGetDaTaWoo(response.data))
        });
    }, []);
    return(
        <>
        <div className='uoo'>
            <div className='in_uoo'>
                {product.map((value, i) =>(
                    <div key={i} className='product_uoo'>
                        <Link to={`/${value.name}/${value.id}`}>
                            <img src={value.images[0].src} alt={value.slug}/> 
                            {/* <img src={value.images.map((img,i)=>(img.src))} alt={value.slug}/>  */}
                            <Rating name="reat" defaultValue={value.average_rating} size="small" readOnly precision={0.5} />
                            <h3>{value.name}</h3>
                            <p>$ {value.price}</p>
                        </Link>
                        <button>ADD TO CARD</button>
                    </div>                  
                ))}           
            </div>                
        </div>
        </>
    )
}
const mapDispatchToProps=(dispatch) =>{
    return{
        dispatchProduct:(data) => {
            dispatch(actGetDaTaWoo(data))
        }
    }
}
const mapStateToProps=(state) =>{
    // console.log(state);
    return{
        finishDaTaWoo:state.finishDaTaWoo
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Uoo);