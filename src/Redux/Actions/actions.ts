import { alert, post, user, comment } from "../../Types/Types"
import { FETCH_POST, LOADING, LOGIN, LOGOUT, POST_DETAILS, SET_ALERT, SET_THEME, ADD_COMMENT, ADD_POST } from "../ActionTypes/actionTypes";

const handleLogin = (payload: user): { type: string, payload: user } => {
    return { type: LOGIN, payload }
}

const handleLogout = (): { type: string } => {
    return { type: LOGOUT }
}

const handleLoading = (payload: boolean): { type: string, payload: boolean } => {
    return { type: LOADING, payload: payload }
}

const handleAlert = (payload: alert): { type: string, payload: alert } => {
    return { type: SET_ALERT, payload }
}

const handlePosts = (payload: post[]): { type: string, payload: post[] } => {
    return { type: FETCH_POST, payload }
}

const handleAddPost = (payload: post): { type: string, payload: post } => {
    return { type: ADD_POST, payload }
}

const handleTheme = (payload: 'light' | 'dark'): { type: string, payload: string } => {
    return { type: SET_THEME, payload }
}
const handlePostDetails = (payload: post): { type: string, payload: post } => {
    return { type: POST_DETAILS, payload: payload }
}

const handleAddComment = (payload: comment): { type: string, payload: comment } => {
    return { type: ADD_COMMENT, payload: payload }
}

export { handleLoading, handlePosts, handleLogin, handleLogout, handleTheme, handleAlert, handlePostDetails, handleAddComment, handleAddPost }