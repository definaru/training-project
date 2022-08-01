import axios from 'axios'
import { dataSlice } from './DataSlice'


export const fetchAllArticles = () => async(dispatch) => {
    try {
        dispatch(dataSlice.actions.Loading())
        const responce = await axios.get(`/api/article`)
        await dispatch(dataSlice.actions.articleFetching(responce.data))
    } catch (e) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}

export const fetchOneArticle = (id) => async(dispatch) => {
    try {
        dispatch(dataSlice.actions.Loading())
        const responce = await axios.get(`/api/article/${id}`)
        await dispatch(dataSlice.actions.articleFetching(responce))
    } catch (e) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}

export const fetchAddArticle = (datas) => async(dispatch) => {
    try {
        dispatch(dataSlice.actions.Loading())
        const responce = await axios.post(`/api/article`, datas)
        dispatch(dataSlice.actions.addArticle(responce.data))
    } catch (e) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}

export const fetchComment = () => async(dispatch) => {
    try {
        dispatch(dataSlice.actions.Loading())
        const responce = await axios.get(`/api/comment`)
        await dispatch(dataSlice.actions.commentFetching(responce))
    } catch (e) {
        dispatch(dataSlice.actions.getMessageError(e.message))
    }
}