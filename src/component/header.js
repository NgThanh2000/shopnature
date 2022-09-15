import React from 'react';
import Logo from "./logo";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
// import {useDispatch, useSelector} from 'react-redux';
import {getMenu} from '../actions/actions';

function Header(props){
    // const dispatch =useDispatch();
    // const menu =useSelector(state => state.finishMenu)

    useEffect(() =>{
        props.dispatchMenu()
    },[])
    return(
        <div className='header'>
            <Logo/>
            <div className='in_header'>
                {props.finish.map((menuItem,i)=>(
                    <div key={i} className='menu'>
                        <Link to="{menuItem.post_title}">{menuItem.post_title}</Link>
                    </div>           
                ))}
            </div>         
        </div>
    )
}
const mapDispatchToProps =( dispatch ) =>{
    return{
        dispatchMenu:(data) =>{
            dispatch(getMenu(data))
        }
    }
}
const mapStateToProps = (state) => {
    return{
        //vi data đổ vào finishMenu nên menu ko có data nó chỉ là bước trung gian 
        finish :state.finishMenu,
        menu: state.menu
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header); 