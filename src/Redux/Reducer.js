import {ADD,SUBTRACT,MULTIPLY,DIVIDE,CLEAR} from './ActionType'

const initialState = {
    result : 0
}

const calculatorReducers = (state=initialState,action)=>{

    switch(action.type){
        case ADD:
            return{
                result:action.payload.value1 + action.payload.value2
            };
        case SUBTRACT:
            return{
                result:action.payload.value1 - action.payload.value2
            };
        case MULTIPLY:
            return{
                result:action.payload.value1 * action.payload.value2
            };
        case DIVIDE:
            return{
                result:action.payload.value1 / action.payload.value2
            };
        case CLEAR:
            return{
                result:0
            };
        default:
            return state;
    }

}

export default calculatorReducers;