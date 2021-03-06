import React, {Component} from 'react';

class Search extends Component {
	constructor() {
		super();
		this.state = {
			searchTerm: "React2"
		};
	}

	handleChange(event) {
		this.setState({searchTerm: event.target.value.substring(0, 5)});
	};

	handleSubmit(event) {
		console.log("Submitted values are: ",
				event.target.name.value,
				event.target.email.value);
		event.preventDefault();
	};

	handleClick() {
		// 원시 DOM API를 이용해 텍스트 입력으로 포커스 전환
		this.refs.myTextInput.focus();
	}

	render() {
		let textAreaStyle = {
			margin: 20
		};

		return (
			<div>
				SearchTerm:
				<input type="search" value={this.state.searchTerm}
					onChange={this.handleChange.bind(this)} />
				
				<div style={textAreaStyle}>
					<textarea>This is description</textarea>
				</div>

				<div style={textAreaStyle}>
					<select value="B">
						<option value="A">Mobile</option>
						<option value="B">Work</option>
						<option value="C">Home</option>
					</select>
				</div>

				<div style={textAreaStyle}>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div className="formGroup">
							Name: <input name="name" type="text" />
						</div>
						<div className="formGroup">
							E-mail: <input name="email" type="mail" />
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>

				<div style={textAreaStyle}>
					<input type="text" ref="myTextInput" />
					<input 
						type="button"
						value="Focus the text input"
						onClick={this.handleClick.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default Search;