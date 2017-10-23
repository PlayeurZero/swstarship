import React, { Component } from 'react'
import { Card, Spin, Pagination, Modal } from 'antd'

import Films from './Films'

import url from 'url'

class Results extends Component {

	renderResults() {
		let { results } = this.props

		if(results && results.results) {
			let current
			let maxPerPage = 7
			let total = results.count

			if(results.next) {
				current = url.format(results.next, true).page
			}

			return (
				<span>
					{
						results.results.map((result, index) => {
							return (
								<span key={index}>
									<Card
										title={result.name}
										extra={<a onClick={
											() => {
												Modal.info({
													title: 'Informations détaillées',
													content: (
													  <div>
														<p>Présents dans <b>{ result.films.length }</b> film{ result.films.length > 1 ? 's' : '' }</p>
														<p>Modèle: <b>{ result.model }</b></p>
														<p>Passagers: <b>{ result.passengers }</b></p>
														<Films films={result.films} />
													  </div>
													),
													onOk() {},
												  })
											}
											}>Plus d'informations</a>}
										style={{ width: 500, marginTop: 30 }}
									>
										<p>Présents dans <b>{ result.films.length }</b> film{ result.films.length > 1 ? 's' : '' }</p>
										<p>Modèle: <b>{ result.model }</b></p>
										<p>Passagers: <b>{ result.passengers }</b></p>
									</Card>
								</span>
							)
						})
					}

					<Pagination style={{ marginTop: 30 }} defaultCurrent={current} total={total} pageSize={maxPerPage} />	
				</span>
			)
		} else {
			return <p>Effectuez une recherche pour afficher les vaisseaux</p>
		}
	}

	render() {
		let { fetching } = this.props

		if(fetching) {
			return (
				<Spin tip="Chargement">
				</Spin>
			)
		}

		return this.renderResults()
	}

}

export default Results
