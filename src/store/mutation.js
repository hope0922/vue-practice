import {
	GET_CURRENT_POSTION,
} from './mutationTypes.js'

export default {
    [GET_CURRENT_POSTION](state,postionStr){
        state.postionStr = postionStr;
    }
}