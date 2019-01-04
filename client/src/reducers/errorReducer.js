import {
    SET_ERROR,
    RESET_ERROR
} from "../actions/types";

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return action.payload;

        case RESET_ERROR:
            return action.payload;

        default:
            return state;
    }
}