import { FINISH_CALL_API} from '../actions/actions';

const initial = [
    {
        "id":1,
        "naem":"caches",
    },
    {
        "id":2,
        "naem":"ewfef",
    }
]
const finishMenu = (state = initial, action) =>{
    switch(action.type){
        case FINISH_CALL_API:
            return state=action.data
            // return {..'.state, payload: action.payload}
        default:
            return state
    }
}

export default finishMenu;