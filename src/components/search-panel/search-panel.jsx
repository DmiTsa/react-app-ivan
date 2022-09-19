import { Component } from 'react';

class SearchPanel extends Component {
  constructor(props) {
    // const { onUpdateSearch } = props;
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Введите имя"
          onChange={this.onUpdateSearch}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchPanel;
