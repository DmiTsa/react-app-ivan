import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList(props) {
  const { data, onDelete, onToggleProp } = props;
  const cont = data.map((empl) => {
    const { id, ...emplMod } = empl;
    return (
      <EmployeesListItem
        key={id}
        {...emplMod}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))
        }
      />
    );
  });
  return <ul className="app-list list-group">{cont}</ul>;
}

export default EmployeesList;
