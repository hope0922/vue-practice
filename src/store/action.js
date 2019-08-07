import {
	getCurrentCity
} from '../service/api'
import {
	GET_CURRENT_POSTION
} from './mutationTypes.js'

export default {
	async getPostion({
		commit,
		state
	}) {
		let res = await getCurrentCity();
		commit(GET_CURRENT_POSTION, res)
	}
}