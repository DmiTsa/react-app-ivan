import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({ data }) {
  return (
    <ul className="app-list list-group">
      {data.map((empl) => (
        <EmployeesListItem name={empl.name} salary={empl.salary} />
      ))}
    </ul>
  );
}

export default EmployeesList;
