import React,{Component} from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term:""};
  }
  render() {
    return <input className="search-bar" onChange={event =>this.handleInputChange(event.target.value)} />
  }

  handleInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);

  }
}


export default SearchBar;
