import style from './Watch.module.scss'

export default function Watch() {
  return (
    <>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.watchNumber}>0</span>
      <span className={style.watchNumber}>0</span>
    </>
  );
}
