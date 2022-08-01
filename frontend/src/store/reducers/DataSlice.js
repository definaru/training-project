import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    articles: [],
    comments: '',
    isLoading: false,
    error: ''
}

export const dataSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        Loading(state) {
            state.isLoading = true
        },
        addArticle(state, action) {
            console.log('state:', state)
            console.log('action:', action)
            state.articles.push({
                text: action.payload.text,
                title: action.payload.title,
                user: action.payload.user
            })
            state.error = ''
        },
        remoteArticle(state, action) {
            state.articles = state.articles.filter(post => post.id !== action.payload.id)
        },
        articleFetching(state, action) {
            state.isLoading = false
            state.error = ''
            state.articles = action.payload.data
        },
        commentFetching(state, action) {
            state.isLoading = false
            state.error = ''
            state.comments = action.payload.data.records.filter(com => com.article === state.articles.id)
                //.map(p => (p.article)) //[{id: p.id, user: p.user, text: p.text}][0]
                //.filter(state => state.comments.article == action.payload.id)
                //console.log('id:', action.payload.id)
                //console.log('state:', state.articles.id)

        },
        getMessageError(state, action) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { addArticle, remoteArticle } = dataSlice.actions

export default dataSlice.reducer