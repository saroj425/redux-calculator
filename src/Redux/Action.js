import { ADD, SUBTRACT , MULTIPLY , DIVIDE , CLEAR} from './ActionType'

export const add = (value1,value2)=>({
    type:"ADD",
    payload:{value1,value2}
});
export const subtract = (value1,value2)=>({
    type:"SUBTRACT",
    payload:{value1,value2}
});
export const multiply = (value1,value2)=>({
    type:"MULTIPLY",
    payload:{value1,value2}
});
export const divide = (value1,value2)=>({
    type:"DIVIDE",
    payload:{value1,value2}
});
export const clear = ()=>({
    type:"CLEAR"    
})
