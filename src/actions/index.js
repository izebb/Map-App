import { CONSTANTS, URL } from "./constants"



const recieveSpaces = (json) => {
    return {
        type: CONSTANTS.RECEIVE_SPACES,
        data: json,
        isFetching: false

    };
}


const requestSpaces = () => {
    return {
        type: CONSTANTS.REQUEST_SPACES,
        isFetching: true,
        data: {}
    }
}

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

}


export const fetchSpaces = () => {
    return (dispatch, getState) => {
        return dispatch(_fetchSpaces())
    }
}
