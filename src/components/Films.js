import React, { Component } from 'react'
import { Spin } from 'antd'

import axios from 'axios'

class Films extends Component {

	constructor() {
		super()

		this.state = {
			fetched: false,
			films: []
		}
	}

	renderFilms() {
		let { films } = this.props

		if(!this.state.fetched) {
			films.map(film => {
				axios.get(film)
					.then(response => {
						this.setState({
							fetched: true,
							fetching: false,
							films: [...this.state.films, response.data.title]
						})
					})
					.catch(response => {
						this.setState({
							fetched: false,
							fetching: false
						})
					})
			})
		}

		if(this.state.fetched && this.state.films.length > 0) {
			return (
				<span>
					Liste des films: <br />
					<ul>
						{
							this.state.films.map((film, index) => {
								return (
									<li key={index}>- { film }</li>
								)
							})
						}
					</ul>
				</span>
			)
		}

		if(!this.state.fetched) {
			return (
				<Spin tip={"Chargement en cours..."} />
			)
		}

		return (
			<p>Une erreur s'est produite...</p>
		)
		
	}

	render() {
		return this.renderFilms()
	}

}

export default Films
