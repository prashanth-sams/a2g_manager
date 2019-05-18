import React , { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

	constructor(props){
		super(props);
		this.onChangeTagName = this.onChangeTagName.bind(this);
		this.onChangeBookName = this.onChangeBookName.bind(this);
		this.onChangeChapterNumber = this.onChangeChapterNumber.bind(this);
		this.onChangeVerseNumber = this.onChangeVerseNumber.bind(this);
		this.onSubmit= this.onSubmit.bind(this);

		this.state = {
			tag_name : '',
			book_name : '',
			chapter_number: '',
			verse_number: ''
		};
	}


	onChangeTagName(e) {
		this.setState({
			tag_name : e.target.value
		});
	}

	onChangeBookName(e){
		this.setState({
			book_name : e.target.value
		});
	}

	onChangeChapterNumber(e){
		this.setState({
			chapter_number : e.target.value
		});
	}

	onChangeVerseNumber(e){
		this.setState({
			verse_number : e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();
		console.log(`The values are ${this.state.tag_name}, ${this.state.book_name}, ${this.state.chapter_number}, and ${this.state.verse_number}`)
		
		const obj = {
			tag_name : this.state.tag_name,
			book_name : this.state.book_name,
			chapter_number : this.state.chapter_number,
			verse_number : this.state.verse_number
		};

		axios.post('http://localhost:4000/manager/add', obj)
			.then( res=> console.log(res.data));

		this.setState({
			tag_name : '',
			book_name : '',
			chapter_number : '',
			verse_number : ''
		});

		
	}

	render(){
		return (
			<div style={{marginTop: 10}}>
                <h3>add new</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Tags:  </label>
                        <input type="text" className="form-control"
                        	value={this.state.tag_name}
                        	onChange={this.onChangeTagName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Book: </label>
                        <input type="text" className="form-control"
                        	value={this.state.book_name}
                        	onChange={this.onChangeBookName}
                        />
                    </div>
					<div className="form-group">
                        <label>Chapter: </label>
                        <input type="text" className="form-control"
                        value={this.state.chapter_number}
                        onChange={this.onChangeChapterNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Verse number: </label>
                        <input type="text" className="form-control"
                        value={this.state.verse_number}
                        onChange={this.onChangeVerseNumber}
                        />
                    </div>
					<div className="form-group">
                        <label>Verse: </label>
                        <input type="text" className="form-control"
                        // value={this.state.chapter_number}
                        // onChange={this.onChangeChapterNumber}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Verse" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
		)
	}
}