import React from "react";
import './style.scss'

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "JavaScript",
      time: "01:00:00",
    },
    {
        task: "TypeScript",
        time: "03:00:00",
      },
  ];

  return (
    <aside className="listaTarefas">
      <h2> Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="item">
            <h3> {task.task} </h3>
            <span>0{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
