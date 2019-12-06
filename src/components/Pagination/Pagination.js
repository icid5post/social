import React, { useState } from "react";
import classes from "./Pagination.module.scss";

const Pagination = props => {
  const total = Math.ceil(props.total / props.size);

  let items = [];

  for (let i = 1; i <= total; i++) {
    items.push(i);
  }

  let portionCount = Math.ceil(total / props.range);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionCount = (portionNumber - 1) * props.range + 1;
  let rightPortionCount = portionNumber * props.range;

  const getPages = page => {
    if (total === 1) {
      return;
    }
    props.getPages(page);
  };

  return (
    <div>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>-</button>
      )}

      <ul className={classes.pagination}>
        {items
          .filter(item => item >= leftPortionCount && item <= rightPortionCount)
          .map(item => {
            return (
              <li key={item}>
                <a
                  href="#"
                  className={
                    props.current === item
                      ? classes.paginationButton + " " + classes.current
                      : classes.paginationButton
                  }
                  onClick={() => getPages(item)}
                >
                  {item}
                </a>
              </li>
            );
          })}
      </ul>
      {portionNumber < portionCount && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>+</button>
      )}
    </div>
  );
};

export default Pagination;
