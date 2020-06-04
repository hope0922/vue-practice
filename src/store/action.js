import {
	getCurrentCity
} from '../service/api'
import {
	GET_CURRENT_POSTION, SET_LOADING
} from './mutationTypes.js'

export default {
	getPostion({
		commit,
		state
	}) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const positionData = position.coords;
                const { longitude, latitude } = positionData;
                getCurrentCity({
                    location: `${longitude},${latitude}`,
                    ak: "vYATQ8UrSFjpqTcWRbkfwgDZ7KwcgkzS",
                    coordtype: "wgs84ll"
                }).then(res => {
                    if (res.data.status === 0) {
                        commit(GET_CURRENT_POSTION, res.data.recommendStops[0].name)
                    }
                });
            },error=>console.log(error.message));
        }
    },
    setLoading({        
        commit,
        state
    }){
        commit(SET_LOADING, !this.state.loading)
    }
}