import React from "react";
import classes from "./Pagination.module.scss";

const Pagination = props => {
  const total = Math.ceil(props.total / props.size);

  let items = [];

  for (let i = 1; i <= props.range; i++) {
    items.push(i);
  }

  const getPages = page => {
    if (total === 1) {
      return;
    }
    props.getPages(page);
  };

  return (
    <ul className={classes.pagination}>
      {items.map(p => {
        return (
          <li key={p}>
            <a
              href="#"
              className={
                props.current === p
                  ? classes.paginationButton + " " + classes.current
                  : classes.paginationButton
              }
              onClick={() => getPages(p)}
            >
              {p}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
