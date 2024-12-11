import React from "react";
import Button from "../Button";
import style from "./Forms.module.scss";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

class Forms extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      {
        ...this.state,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    this.setState({
      task: "",
      time: "00:00",
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar"
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time"> Tempo </label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
            required
          />
        </div>
        <Button type="submit"> Adicionar </Button>
      </form>
    );
  }
}

export default Forms;
