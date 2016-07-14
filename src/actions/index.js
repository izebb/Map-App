import { CONSTANTS, URL } from "./constants"


// action to receive json from ajax call 

const recieveSpaces = (json) => {
    return {
        type: CONSTANTS.RECEIVE_SPACES,
        data: json,
        isFetching: false

    };
}


// action to request spaces basically to trigger a loader 

const requestSpaces = () => {
    return {
        type: CONSTANTS.REQUEST_SPACES,
        isFetching: true,
        data: {}
    }
};


// action to fetch spaces spaces basically to trigger a loader 
const _fetchSpaces = () => {
    return dispatch => {
        dispatch(requestSpaces());
        fetch(URL)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(recieveSpaces(json))
            });
    }

};


export const selectedSpace = (id) =>{
         return {
            type: CONSTANTS.SELECT_SPACE,
            id: id
        }
};

export const fetchSpaces = () => {
    return (dispatch, getState) => {
        return dispatch(_fetchSpaces())
    }
};
