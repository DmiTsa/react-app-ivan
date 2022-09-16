import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList({ data, onDelete }) {
  const cont = data.map((empl) => {
    const { id, ...emplMod } = empl;
    return (
      <EmployeesListItem key={id} {...emplMod} onDelete={() => onDelete(id)} />
    );
  });
  return <ul className="app-list list-group">{cont}</ul>;
}

export default EmployeesList;
