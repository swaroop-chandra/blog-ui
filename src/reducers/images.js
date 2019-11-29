
const imageInitialState = []

const imageReducer = (state = imageInitialState, action) => {
    switch(action.type){
        case 'IMAGES':{
            return [...action.payload]
        }
        default : {
        return [...state]
        }  
    }
}

export default imageReducer