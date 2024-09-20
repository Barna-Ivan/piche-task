import { memo } from "react";
import { Action } from "../interface";

const Card = ({ elem }: { elem: Action }): JSX.Element => (
  <div className="container-data">
    <div className="data-info">
      <div className={`${elem.type}`}>{elem.type}</div>
      <div>{elem.year ? `${elem.year} Year` : ""}</div>
    </div>
    <hr />
    <p>{elem.text}</p>
  </div>
);

export default memo(Card);
