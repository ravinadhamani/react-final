var obj = {
    name : "Rahul",
    email : 20
}

export const reducer = (state = obj,action) => {
    if(action.type === "change_name"  ){
        return {
            ...state,
            name : action.payload
        }
    }else if(action.type === "change_age"){
        return {
            ...state,
            email : action.payload
        }
    }
    console.log("reducer" , action)
    return state;
}

 