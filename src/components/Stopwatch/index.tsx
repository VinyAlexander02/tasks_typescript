import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useState } from "react";

interface Props {
  selected: ITask | undefined;
}

export default function Stopwatch({ selected }: Props) {
  const [time, setTime] = useState<number>();

  if (selected?.time) {
    setTime(timeToSeconds(selected.time));
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}> Escolha um card e inicie o cronômetro</p>
      Tempo: {time}
      <div className={style.watchWrapper}>
        <Watch />
      </div>
      <Button btnName="Começar" />
    </div>
  );
}
