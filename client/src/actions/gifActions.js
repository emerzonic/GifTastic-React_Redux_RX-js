import axios from "axios";
import {
    GET_GIFS,
    TOGGLE_PLAY,
} from "./types";
import {
    getErrors
} from "./errorAction";


export const getGifs = (search, number) => async dispatch => {
    console.log(search)
    console.log(number)

    try {
        const res = await axios.get(
            `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=WwClsP3WP2aPg9o5S7LndRo1YTZCrP5f&limit=${Number(number)}`
            )
        dispatch({
            type: GET_GIFS,
            payload: res.data.data || []
        })
    } catch (err) {
        getErrors(err, dispatch)
    }
}

export const togglePlay = (bool, gifId) => async dispatch => {
    dispatch({
        type: TOGGLE_PLAY,
        payload: {isPlaying:bool, gifId:gifId}
    })
}

