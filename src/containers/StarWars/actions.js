import axios from 'axios'

import * as constants from './constants'

export function setSearch(search, page = 1) {
	return dispatch => {
		const base_url = 'https://swapi.co/api/starships/'

		if(!search) search = ''

		dispatch({
			type: constants.SET_SEARCH,
			payload: search
		})

		if(search.length === 0) {
			dispatch({
				type: constants.FETCH_STARSHIPS
			})

			axios.get(`${base_url}?page=${page}`)
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

			axios.get(`${base_url}?search=${search}&page=${page}`)
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
