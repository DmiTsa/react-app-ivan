import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', salary: '' };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addEmpl = (e) => {
    const { name, salary } = this.state;
    e.preventDefault();
    if (name.length < 3 || !Number.isInteger(+salary) || +salary === 0) return;
    this.props.addEmployee(this.state.name, this.state.salary);
    this.setState({ name: '', salary: 0 });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.addEmpl}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Имя сотрудника"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="ЗП в $"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
