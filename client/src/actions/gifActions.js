import axios from "axios";
import {
    GET_GIFS,
    PLAY_GIF,
    STOP_GIF
} from "./types";
import {
    getErrors
} from "./errorAction";


export const getGifs = (search, number) => async dispatch => {
    console.log(search)
    console.log(number)

    try {
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=WwClsP3WP2aPg9o5S7LndRo1YTZCrP5f&limit=${Number(number)}`)
        dispatch({
            type: GET_GIFS,
            payload: res.data.data || []
        })
    } catch (err) {
        getErrors(err, dispatch)
    }
}

export const playGif = (boolean) => async dispatch => {
    dispatch({
        type: PLAY_GIF,
        payload: boolean
    })
}

export const stopGif = (boolean) => async dispatch => {
    dispatch({
        type: STOP_GIF,
        payload: boolean
    })
}