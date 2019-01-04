import {
    GET_GIFS,
    TOGGLE_PLAY,
} from "../actions/types";

const initialState = {
    gifs: [],
    currentGif: {
        isPlaying: false,
        gifId: ''
    }

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GIFS:
            return { ...state,
                gifs: action.payload
            }
        case TOGGLE_PLAY:
            return { ...state,
                currentGif: action.payload
            }
        default:
            return state
    }

}