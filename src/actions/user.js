import axios from 'axios'

export const getUser=(user)=>{
    return {
        type:"GET_USER",
        payload:user
    }
}

export const startGetUser=(id)=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response=>{
                const user=response.data
                dispatch(getUser(user))
            })
    }
}