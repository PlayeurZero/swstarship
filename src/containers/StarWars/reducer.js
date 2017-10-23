import * as constants from './constants'

const initialState = {
	search: '',
	fetching: false,
	results: {}
}

export default (state = initialState, action) => {
	switch(action.type) {
		case constants.SET_SEARCH: {
			return {
				...state, 
				search: action.payload
			}
		}

		case constants.FETCH_STARSHIPS: {
			return {
				...state,
				fetching: true
			}
		}

		case constants.FETCH_SHARSHIPS_FULFILLED: {
			return {
				...state,
				fetching: false,
				results: action.payload
			}
		}

		case constants.FETCH_STARSHIPS_REJECTED: {
			return {
				...state,
				fetching: false
			}
		}

		default: {
			return state
		}
	}
}
