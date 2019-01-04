import {
    SET_ERROR,RESET_ERROR
} from "./types";


export const getErrors = (err, dispatch) => { 
    if (err.response && err.response.status && err.response.status === 500) {
        dispatch({
            type: SET_ERROR,
            payload: err.response
        })
    }
}


export const resetErrors = (dispatch) => {  
        dispatch({
            type: RESET_ERROR,
            payload: {}
        })

}