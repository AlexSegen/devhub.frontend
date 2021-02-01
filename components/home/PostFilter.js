import Link from "next/link";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import styles from "./postFilter.module.scss";

const PostFilter = () => {
  const router = useRouter();
  const { period } = router.query;
  const [activeFilter, setActiveFilter] = useState();

  const isActive = (filter) => (filter === activeFilter ? styles.active : "");

/*   const validParams = ["newest", "week", "month", "year"];

  if (!validParams.some(item => item === period)) {
    console.log('Hello')
  } */

  useEffect(() => {
    setActiveFilter(period || "newest")
  }, [])
  

  return (
    <div className={styles.dh__filters}>
      <Link href="/top/newest">
        <a className={isActive("newest")}>Newest</a>
      </Link>

      <Link href="/top/week">
        <a className={isActive("week")}>Week</a>
      </Link>

      <Link href="/top/month">
        <a className={isActive("month")}>Month</a>
      </Link>

      <Link href="/top/year">
        <a className={isActive("year")}>Year</a>
      </Link>
    </div>
  );
};

export default PostFilter;
