import { FETCH_POST, LOADING, LOGIN, LOGOUT, SET_ALERT, SET_THEME, POST_DETAILS, ADD_COMMENT } from "../ActionTypes/actionTypes";
import { initialStateProps } from "../../Types/Types";
import { produce } from "immer";
const initialState: initialStateProps = {
    theme: 'light',
    loading: false,
    alert: {
        state: false,
        message: '',
        type: undefined
    },
    auth: {
        data: null,
        status: false
    },
    posts: [],
    similarPosts: [],
    postDetails: null,
    pagination: {
        page: 1,
        limit: 5
    }
}

const reducer = (state = initialState, action: { type: string, payload: any }): initialStateProps => {
    const { type, payload } = action;
    switch (type) {
        case SET_THEME:
            return { ...state, theme: payload };
        case SET_ALERT:
            return { ...state, alert: payload }
        case LOADING:
            return { ...state, loading: payload }
        case LOGIN:
            return { ...state, auth: { data: payload, status: true } }
        case LOGOUT:
            return { ...state, auth: { data: null, status: false } }
        case FETCH_POST:
            return { ...state, posts: payload }
        // case 'ADD_POST':
        //     return { ...state, posts: [...state.posts, payload] }
        case ADD_COMMENT:
            return produce(state, (draft) => {
                draft.postDetails = payload
            })
        case POST_DETAILS:
            return { ...state, postDetails: payload };
        default:
            return state
    }
}

export default reducer;