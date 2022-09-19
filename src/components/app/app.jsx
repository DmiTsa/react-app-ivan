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
        {
          name: 'Вася Пупкин',
          salary: 500,
          increase: true,
          like: false,
          id: 1000,
        },
        {
          name: 'Семен Семеныч',
          salary: 400,
          increase: false,
          like: true,
          id: 1001,
        },
        {
          name: 'Игорь Петрович',
          salary: 800,
          increase: true,
          like: false,
          id: 1003,
        },
      ],
    };
  }
  addNewEmployee = (name, salary) => {
    const newEmpl = {
      name,
      salary,
      insrease: false,
      like: false,
      id: nextId(),
    };
    this.setState(({ data }) => {
      return { data: [...data, newEmpl] };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((pers) => pers.id !== id);
      return { data: newData };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, [prop]: !item[prop] };
          } else return item;
        }),
      };
    });
  };

  // onToggleLike = (id) => {
  //   this.setState(({ data }) => {
  //     return {
  //       data: data.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, like: !item.like };
  //         } else return item;
  //       }),
  //     };
  //   });
  // };

  render() {
    const employeeCount = this.state.data.length;
    const employeeBonusCount = this.state.data.filter(
      (empl) => empl.increase === true
    ).length;
    return (
      <div className="app">
        <AppInfo
          employeeCount={employeeCount}
          employeeBonusCount={employeeBonusCount}
        />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm addEmployee={this.addNewEmployee} />
      </div>
    );
  }
}

export default App;
