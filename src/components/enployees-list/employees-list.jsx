import EmployeesListItem from '../employees-list-item/employees-list-item';

function EmployeesList(props) {
  const { data, onDelete, onToggleIncrease, onToggleLike } = props;
  const cont = data.map((empl) => {
    const { id, ...emplMod } = empl;
    return (
      <EmployeesListItem
        key={id}
        {...emplMod}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleLike={() => onToggleLike(id)}
      />
    );
  });
  return <ul className="app-list list-group">{cont}</ul>;
}

export default EmployeesList;
