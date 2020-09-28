const initialState = {
    user:{
        id: "User x",
        token: "aabbcc",
    }
}

const updateObj = (state, newState) => {
    return {... state,
            ...newState
    }
}

const BaseReducer = (state=initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default BaseReducer;