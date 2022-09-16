import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../enployees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import '../search-panel/search-panel.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Вася Пупкин', salary: 500, increase: true, id: 1 },
        { name: 'Семен Семеныч', salary: 400, increase: false, id: 2 },
        { name: 'Игорь Валькович', salary: 1100, increase: false, id: 3 },
        { name: 'Игорь Петрович', salary: 800, increase: true, id: 4 },
      ],
    };
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((pers) => pers.id === id);
      console.log(index);
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
