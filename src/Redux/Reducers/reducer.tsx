export { }
const initialState = {
    loading: false,
    auth: {
        data: null,
        status: false
    },
    posts: [],
    similarPosts: []
}

export default function reducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case 'LOADING':
            return {...state,loading:payload}
        case 'LOGIN':
            return { ...state, auth: { data: payload, status: true } }
        case 'LOGOUT':
            return { ...state, auth: { data: null, status: false } }
        default:
            return state
    }
}