import { LOADING } from "../ActionTypes/actionTypes";
import { initialStateProps, post } from "../../Types/Types";
const initialState: initialStateProps = {
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
    postDetails: undefined,
    pagination: {
        page: 1,
        limit: 5
    }
}

const reducer = (state = initialState, action: { type: string, payload: any }): initialStateProps => {
    const { type, payload } = action;
    switch (type) {
        // case 'SET_THEME':
        //     if (state.auth.status) {
        //         const newData = { ...state.auth.data, dark: !state.auth.data.dark }
        //         return { ...state, auth: { data: newData, status: true } }
        //     }
        //     return state;
        case LOADING:
            return { ...state, loading: payload }
        case 'LOGIN':
            return { ...state, auth: { data: payload, status: true } }
        case 'LOGOUT':
            return { ...state, auth: { data: null, status: false } }
        case 'FETCH_POST':
            console.log(payload, "payload")
            return { ...state, posts: payload }
        // case 'ADD_POST':
        //     return { ...state, posts: [...state.posts, payload] }
        // case 'PAGE_CHANGE':
        //     return { ...state, pagination: { ...state.pagination, page: payload } }
        default:
            return state
    }
}

export default reducer;