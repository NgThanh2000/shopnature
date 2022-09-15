export const MENU = 'MENU';
export const FINISH_CALL_API = 'FINISH_CALL_API';

export const PRODUCT = 'PRODUCT';
export const FINISH_CALL_PRODUCT = 'FINISH_CALL_PRODUCT';

export const NEW_PRODUCT = 'NEW_PRODUCT';
export const NEW_FINISH_CALL_PRODUCTS = 'NEW_FINISH_CALL_PRODUCTS';

export const DATA_WOO = 'DATA_WOO';

export const SLIDER = 'SLIDER';
export const FINISH_SLIDER = 'FINISH_SLIDER';
// ?????????????????????????????????

export const getMenu = (payload) =>{
    return{
        type: MENU,
        payload
    }
}

export const finishMenu= (payload) =>{
    return{
        type: FINISH_CALL_API,
        payload
    }
}
// 
export const actGetProduct =(payload) =>{
    return{
        type:PRODUCT,
        payload
    }
}
export const finishProduct = (payload) =>{
    return{
        type:FINISH_CALL_PRODUCT,
        payload
    }
}
///
export const actGetNewProduct = (payload) =>{ 
    return{
        type:NEW_PRODUCT,
        payload
    }
}
export const actNewCallProduct = (payload) =>{ 
    return{
        type:NEW_FINISH_CALL_PRODUCTS,
        payload
    }
}

//
export const actGetDaTaWoo =(data) =>{
    return{
        type: DATA_WOO,
        data
    }
}
//
export const slider = (payload) =>{
    return{
        type: SLIDER,
        payload
    }
}
export const finishSlider =(payload) =>{
    return{
        type: FINISH_SLIDER ,
        payload 
    }
}

