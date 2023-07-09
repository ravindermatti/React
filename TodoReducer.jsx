const todo=[]
export const TodoReducer =(state=todo,action)=>{
    switch (action.type) {
        case "ADD":{
            return[...state,action.payload];
        }
        case "REMOVE":{
            return state.filter((i,index)=>index!==action.index);
        }
        default:return state;

    }
}