const postsInitialState=[]

const postsReducers =(state=postsInitialState,action)=>{
    switch(action.type){
        case "SET_POSTS":{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default postsReducers