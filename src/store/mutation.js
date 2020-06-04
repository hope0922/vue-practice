import {
    GET_CURRENT_POSTION,
    SET_LOADING
} from './mutationTypes.js'

export default {
    [GET_CURRENT_POSTION](state,postionStr){
        state.postionStr = postionStr;
    },
    [SET_LOADING](state,loading){
        state.loading = loading;
    }
}