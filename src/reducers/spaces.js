import { List, Map } from "Immutable"
import { CONSTANTS } from "../actions/constants"


// Reducer for spaces- Pure function
const spaces = (state = Map({}), action) => {
    switch (action.type) {
        case CONSTANTS.REQUEST_SPACES:
            return Object.assign({}, state, {
                data: action.data,
                isFetching: action.isFetching
            });

        case CONSTANTS.RECEIVE_SPACES:
            let recievedSpace = Object.assign({}, state, {
                data: action.data,
                isFetching: action.isFetching
            });
            return recievedSpace;

        case CONSTANTS.SELECT_SPACE:
                const _id = action.id;
                let _state = Object.assign({
                    selection: true
                }, state);
                let spaces = _state.data.rows.map((space)=>{
                        if(space.id === _id){
                            space.isSelected = true;
                        }else{
                             space.isSelected = false;
                        }
                        return space;
                })
             _state.data.rows = spaces;
             return _state;
        default:
            return state;

    }

}
export default spaces;
