//TYPES
export const types={
    startLoading:'ricky-morty/ui/startLoading',
    finishLoading:'ricky-morty/ui/finishLoading'
}
//INITIAL STATE
const initialState={
    loading:false
}

//REDUCER
export const uiReducer=(state=initialState,action)=>{
    switch (action.type) {
        case types.startLoading:
           return {
               ...state,
               loading:true
           }
        case types.finishLoading:
           return {
               ...state,
               loading:false
           }
      
        default:
            return state;
    }
}


//ACTIONS CREATORS

export const startLoading=()=>({
    type:types.startLoading
});
export const finishLoading=()=>({
   type:types.finishLoading
})