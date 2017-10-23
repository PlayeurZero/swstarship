import axios from 'axios'

import * as constants from './constants'

export function setSearch(search) {
	return dispatch => {
		dispatch({
			type: constants.SET_SEARCH,
			payload: search
		})

		if(!search) search = ''

		if(search.length === 0) {
			axios.get('https://swapi.co/api/starships/')
				.then(response => {
					dispatch({
						type: constants.FETCH_SHARSHIPS_FULFILLED,
						payload: response.data
					})
				})
				.catch(response => {
					dispatch({
						type: constants.FETCH_STARSHIPS_REJECTED
					})
				})
		}

		if(search.length > 1) {
			dispatch({
				type: constants.FETCH_STARSHIPS
			})

			console.log(`https://swapi.co/api/starships/?name=${search}`)

			axios.get(`https://swapi.co/api/starships/?name=${search}`)
				.then(response => {
					dispatch({
						type: constants.FETCH_SHARSHIPS_FULFILLED,
						payload: response.data
					})
				})
				.catch(response => {
					dispatch({
						type: constants.FETCH_STARSHIPS_REJECTED
					})
				})
		}
	}
}
