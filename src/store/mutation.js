import {
	GET_CURRENT_POSTION,
} from './mutationTypes.js'

export default {
    [GET_CURRENT_POSTION](state,postion){
        state.postionStr = postion.data.recommendStops[0].name;
    }
}