import React, { Component } from 'react'
import { Card, Spin, Pagination, Modal } from 'antd'

import Films from './Films'

import url from 'url'

class Results extends Component {

	renderResults() {
		let { results, handlePaginationChange } = this.props

		if (results && results.results) {
			let current = 1
			let maxPerPage = 10
			let total = results.count

			if (results.next) {
				current = Number.parseInt(url.parse(results.next, true).query.page) - 1
			} else if (results.previous) {
				current = Number.parseInt(url.parse(results.previous, true).query.page) + 1
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
															<h2 style={{ marginTop: 20, marginBottom: 30 }}>{result.name}</h2>
															<p style={{ marginBottom: 5 }}>Modèle: <b>{result.model}</b></p>
															<p style={{ marginBottom: 5 }}>Fabricant: <b>{result.manufacturer}</b></p>
															<p style={{ marginBottom: 5 }}>Prix: <b>{result.cost_in_credits} galactic credits</b></p>
															<p style={{ marginBottom: 5 }}>Longueur : <b>{result.length} mètres</b></p>
															<p style={{ marginBottom: 5 }}>Passagers: <b>{result.passengers} personnes</b></p>
															<p style={{ marginBottom: 5 }}>Équipage: <b>{result.crew} personnes</b></p>
															<Films films={result.films} />
														</div>
													),
													onOk() { },
												})
											}
										}>Plus d'informations</a>}
										style={{ width: 500, marginTop: 30 }}
									>
										<p>Présents dans <b>{result.films.length}</b> film{result.films.length > 1 ? 's' : ''}</p>
										<p>Modèle: <b>{result.model}</b></p>
										<p>Passagers: <b>{result.passengers}</b></p>
									</Card>
								</span>
							)
						})
					}

					<Pagination style={{ marginTop: 30 }} defaultCurrent={current} total={total} pageSize={maxPerPage} onChange={handlePaginationChange} />
				</span>
			)
		} else {
			return <p>Effectuez une recherche pour afficher les vaisseaux</p>
		}
	}

	render() {
		let { fetching } = this.props

		if (fetching) {
			return (
				<Spin style={{ marginTop: 30 }} tip="Chargement">
				</Spin>
			)
		}

		return this.renderResults()
	}

}

export default Results
