import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({ data }) {
  const cont = data.map((empl) => {
    const { id, ...emplMod } = empl;
    return <EmployeesListItem key={id} {...emplMod} />;
  });
  return <ul className="app-list list-group">{cont}</ul>;
}

export default EmployeesList;
