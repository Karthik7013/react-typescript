
const initialState = {
    alert:{
        state:false,
        message:'',
        type:undefined
    },
    success: false,
    error: false,
    loading: false,
    auth: {
        data: { dark: false },
        status: false
    },
    posts: [],
    similarPosts: [],
    pagination: {
        page: 1,
        limit: 5
    }
}

const reducer = (state = initialState, action: { type: string, payload: any }) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_THEME':

            if (state.auth.status) {
                const newData = { ...state.auth.data, dark: !state.auth.data.dark }
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
        case 'PAGE_CHANGE':
            // return state;
            return { ...state, pagination: { ...state.pagination, page: payload } }

        default:
            return state
    }
}

export default reducer;