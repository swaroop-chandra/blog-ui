import axios from 'axios'

export  const getComments=(comments)=>{
    return {
        type:"GET_COMMENTS",
        payload:comments
    }
}

export const startGetComments=(id)=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response=>{
                const comments=response.data
                dispatch(getComments(comments))
            })
    }
}