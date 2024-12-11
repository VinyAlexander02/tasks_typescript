import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  taskFinshed: () => void;
}

export default function Stopwatch({ selected, taskFinshed }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(cont: number = 0) {
    setTimeout(() => {
      if (cont > 0) {
        setTime(cont - 1);
        return regressive(cont - 1);
      }
      taskFinshed();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}> Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Cmeçar </Button>
    </div>
  );
}
