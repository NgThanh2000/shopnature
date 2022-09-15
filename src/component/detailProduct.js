import React from 'react';
// import ImageGallery from 'react-image-gallery';
import {useParams} from "react-router-dom"
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Rating from '@mui/material/Rating';

import Description from '../component/sub_detailProduct/description';
import Info from '../component/sub_detailProduct/info';
import Review from '../component/sub_detailProduct/review';

function DetailProduct(props){
    // console.log(props.finishDaTaWoo)
    
    const {name} = useParams();
    const data = props.finishDaTaWoo;
    const thisProduct = data.find(getid => getid.name === name)
    // const img = thisProduct.images.map(img => img.src)
    // const i2 = img.src
    // console.log(img)
    return(
        <div className='detail_product'>
            <div className='in_detailproduct'>
                <div className='product_detail'>
                    <div className='left'>
                        {/* <ImageGallery items={img}/> */}
                        <img src={thisProduct.images.map((img)=>(img.src))} alt={thisProduct.slug}/>
                    </div>
                    <div className='right'>
                        <h1>{thisProduct.name}</h1>
                        <Rating name="reat" defaultValue={thisProduct.average_rating} size="large" readOnly precision={0.5} />
                        <p dangerouslySetInnerHTML={{ __html:thisProduct.short_description}}></p>
                        <h2>$ {thisProduct.price}</h2>
                        <button>ADD TO CARD</button>
                        <h3>SKU: {thisProduct.sku}</h3>
                        <h3>Categories: {thisProduct.categories.map((cat,i)=>(
                            <span key={i} id='categories'>{cat.name}</span>
                        ))}</h3>
                        <h3>Tags: {thisProduct.tags.map((tag,i)=>(
                            <span  key={i} id='categories'>{tag.name}</span>
                        ))}</h3>
                        <h3>Share: </h3>
                    </div>                 
                </div>                       
            </div>
            <div className='sub_detailProduct'>
                <div className='in_sub_detailProduct'>
                    <Tabs>
                        <TabList>
                            <Tab>DESCRIPTION</Tab>
                            <Tab>ADDITIONAL INFO</Tab>
                            <Tab>REVIEWS 
                                <div className='reviewcon'><p>{thisProduct.rating_count}</p></div>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Description thisProduct={thisProduct}/>
                        </TabPanel>
                        <TabPanel>
                            <Info thisProduct={thisProduct}/>
                        </TabPanel>
                        <TabPanel>
                            <Review thisProduct={thisProduct}/>
                        </TabPanel>
                    </Tabs>
                </div>
            </div> 
        </div>
    )
}

// const mapDispatchToProps= (dispatch) =>{
//     return{
//         dispatchWooProduct:(data) =>{
//             dispatch(actGetDaTaWoo(data))
//         }
//     }
// }
const mapStateToProps= (state) =>{
    // console.log(state);
    return{
        finishDaTaWoo:state.finishDaTaWoo
    }
}
export default connect(mapStateToProps)(DetailProduct);
