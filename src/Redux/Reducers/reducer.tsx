export { }
const initialState = {
    success: false,
    error: false,
    loading: false,
    auth: {
        data: { dark: false },
        status: false
    },
    posts: [],
    similarPosts: []
}

export default function reducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case 'SET_THEME':
            if (state.auth.status) {
                let newData = { ...state.auth.data, dark: !state.auth.data.dark }
                return { ...state, auth: { data: newData, status: true } }
            }
            return state;
        case 'LOADING':
            return { ...state, loading: payload }
        case 'LOGIN':
            return { ...state, auth: { data: payload, status: true } }
        case 'LOGOUT':
            return { ...state, auth: { data: null, status: false } }
        case 'FETCH_POST':
            return { ...state, posts: payload }
        case 'ADD_POST':
            return { ...state, posts: [...state.posts, payload] }
        default:
            return state
    }
}