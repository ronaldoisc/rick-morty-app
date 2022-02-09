export const types={
    startLoading:'ricky-morty/ui/startLoading',
    finishLoading:'ricky-morty/ui/finishLoading'
}

const initialState={
    loading:false
}


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