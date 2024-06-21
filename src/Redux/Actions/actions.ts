import { FETCH_POST, LOADING } from "../ActionTypes/actionTypes"
const handleLoading = (payload: boolean): { type: string, payload: boolean } => {
    return { type: LOADING, payload: payload }
}



export { handleLoading }