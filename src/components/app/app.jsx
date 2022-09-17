import { Component } from 'react';
import nextId from 'react-id-generator';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../enployees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import '../search-panel/search-panel.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Вася Пупкин', salary: 500, increase: true, id: 1000 },
        { name: 'Семен Семеныч', salary: 400, increase: false, id: 1001 },
        { name: 'Игорь Валькович', salary: 1100, increase: false, id: 1002 },
        { name: 'Игорь Петрович', salary: 800, increase: true, id: 1003 },
      ],
    };
  }
  // getId() {
  //   return nextId();
  // }
  setDataIds() {
    this.setState(({ data }) => {
      const newData = data.map((pers) => (pers.id = nextId()));
      return { data: newData };
    });
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((pers) => pers.id !== id);
      return { data: newData };
    });
  };

  render() {
    // console.log('start');
    // setDataIds();
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
