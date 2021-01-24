import { useState } from "react";
import styles from "./postFilter.module.scss";

const PostFilter = () => {

  const [activeFilter, setActiveFilter] = useState("recent");

  const isActive = (filter) => (filter === activeFilter ? styles.active : "");

  return (
    <div className={styles.dh__filters}>
      <button onClick={()=> setActiveFilter('recent')} className={isActive("recent")} type="button">
        Newest
      </button>
      <button onClick={()=> setActiveFilter('week')} className={isActive("week")} type="button">
        Week
      </button>
      <button onClick={()=> setActiveFilter('month')} className={isActive("month")} type="button">
        Month
      </button>
      <button onClick={()=> setActiveFilter('year')} className={isActive("year")} type="button">
        Year
      </button>
    </div>
  );
};

export default PostFilter;
