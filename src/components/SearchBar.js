import React, { Component } from 'react'
import { Input } from 'antd'

const { Search } = Input

class SearchBar extends Component {

	render() {
		let { handleSearch } = this.props

		return (
			<div>
				<Search
					placeholder="Indiquer le nom d'un vaisseau..."
					style={{ width: 300, marginRight: 15 }}
					onSearch={handleSearch}
					size={"large"}
				/>
			</div>
		)
	}

}

export default SearchBar
