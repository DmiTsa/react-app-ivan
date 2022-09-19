import './app-info.css';

function AppInfo(props) {
  const { employeeCount, employeeBonusCount } = props;
  return (
    <div className="app-info">
      <h1>Учет сотрудников</h1>
      <h2>Общее число сотрудников: {employeeCount}</h2>
      <h2>Премию получат: {employeeBonusCount}</h2>
    </div>
  );
}

export default AppInfo;
