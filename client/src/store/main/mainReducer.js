let initialState = {
    currentServer: "",
    currentChannel: ""
}

export let mainReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_SERVER":
            return {...state, currentServer: action.payload}
        case "SET_CHANNEL":
            return {...state, currentChannel: action.payload}
        default:
            return {...state};
    }
}
