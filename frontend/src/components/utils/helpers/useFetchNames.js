import { useEffect, useState } from "react";

import styles from "../../../styles/Footer.module.scss";

import List from "../../List";

const GetNames = () => {
  const [names, fetchNames] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const localURL = "/localData/people.json";

  useEffect(() => {
    fetch(localURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const objOne = data.people[0];
        const objTwo = data.people[1];
        const merge = [...objOne.arr, ...objTwo.arr];
        const names = merge.filter((val, id, arr) => arr.indexOf(val) === id);
        const indexs = names.keys(indexs);
        fetchNames(names, indexs);
      })
      .then(() => setLoading(false))
      .catch(setError);
  }, [localURL]);

  if (loading)
    return (
      <div className={styles.data__wait} aria-live="polite">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className={styles.data__err} aria-live="polite">
        Failed to load data.
      </div>
    );
  if (!names) return <p>This list is empty</p>;

  return <div>{names && <List items={names} />}</div>;
};

export default GetNames;
