import {
    GET_GIFS,
    PLAY_GIF,
    STOP_GIF,
} from "../actions/types";

const initialState = {
    gifs: [],
    playGif: false,
    StopGif:true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GIFS:
            return { ...state,
                gifs: action.payload
            }
        case PLAY_GIF:
            return { ...state,
                playGif: action.payload
            }
        case STOP_GIF:
            return { ...state,
                stopGif:action.payload
            }
        default:
            return state
    }

}