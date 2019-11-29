const usersInitialState=[]

const usersReducers=(state=usersInitialState,action)=>{
    switch(action.type){
        case "SET_USERS":{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default usersReducers