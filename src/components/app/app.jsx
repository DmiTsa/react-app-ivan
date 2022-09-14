import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../enployees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import '../search-panel/search-panel.css';

function App() {
  const data = [
    { name: 'Вася Пупкин', salary: 500, increase: true, id: 1 },
    { name: 'Семен Семеныч', salary: 400, increase: false, id: 2 },
    { name: 'Игорь Валькович', salary: 1100, increase: false, id: 3 },
    { name: 'Игорь Петрович', salary: 800, increase: true, id: 4 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
