export { }
const initialState = {
    dark: false,
    success: false,
    error: false,
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
        case 'SET_THEME':
            return { ...state, dark: payload }
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