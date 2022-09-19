import './app-filter.css';

const AppFilter = (props) => {
  const { filterType, onSetFilter } = props;
  const buttonsData = [
    {
      name: 'all',
      caption: 'Все сотрудники',
    },
    {
      name: 'rise',
      caption: 'На повышение',
    },
    {
      name: 'over',
      caption: 'ЗП больше 1000$',
    },
  ];

  const buttons = buttonsData.map(({ name, caption }) => {
    const active = filterType === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        filterKey={name}
        onClick={() => onSetFilter(name)}
      >
        {caption}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
