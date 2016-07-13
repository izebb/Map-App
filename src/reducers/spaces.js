import { List, Map } from "Immutable"
import { CONSTANTS } from "../actions/constants"

const space = (state = {
    isFetchSpacing: false,
    data: Map({})
}, action) => {
    switch (action.type) {


        default: return state;

    }
}

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
        default:
            return state;

    }

}
export default spaces;
