import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentFilter: '' };
  }

  setFilter = (e) => {
    const typeFilter = e.currentTarget.getAttribute('data-typefilter');
    this.setState({ currentFilter: typeFilter });
    this.props.EmplFilter(typeFilter);
  };

  render() {
    return (
      <div className="btn-group">
        <button
          className="btn btn-light"
          type="button"
          data-typefilter="all"
          onClick={this.setFilter}
        >
          Все сотрудники
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          data-typefilter="rise"
          onClick={this.setFilter}
        >
          На повышение
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          data-typefilter="over"
          onClick={this.setFilter}
        >
          ЗП больше 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
