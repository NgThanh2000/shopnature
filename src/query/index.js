function callApi(){
    return fetch('http://localhost/ShopNature/wp-json/wp/v2/menu').then(res=>res.json());
}
export default callApi;

