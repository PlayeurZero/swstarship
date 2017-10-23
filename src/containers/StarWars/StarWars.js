import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchBar from '../../components/SearchBar'
import Results from '../../components/Results'

import * as starwarsActions from './actions'

class StarWars extends Component {

	constructor() {
		super()

		this.handleSearch = this.handleSearch.bind(this)
		this.handlePaginationChange = this.handlePaginationChange.bind(this)
	}

	componentWillMount() {
		let { starwarsActions } = this.props
		
		starwarsActions.setSearch()
	}

	handleSearch(value) {
		let { starwarsActions } = this.props

		starwarsActions.setSearch(value)
	}

	handlePaginationChange(page) {
		let { search, starwarsActions } = this.props

		starwarsActions.setSearch(search, page)
	}

	render() {
		let { results, fetching } = this.props

		return (
			<div>
				 <SearchBar handleSearch={this.handleSearch} />

				 <Results results={results} fetching={fetching} handlePaginationChange={this.handlePaginationChange} />
			</div>
		)
	}

}

export default connect(
	state => {
		return {
			search: state.starwars.search,
			results: state.starwars.results,
			fetching: state.starwars.fetching
		}
	},
	dispatch => {
		return {
			starwarsActions: bindActionCreators(starwarsActions, dispatch)
		}
	}
)(StarWars)
