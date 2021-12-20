import { useEffect, useState } from "react";

import styles from "@/styles/Cards.module.scss";

const UseFetchApi = () => {
  const [items, fetchItem] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const iconsArray = ["Talkie", "Rabbit", "Shield"].map((img) => {
    return (
      <div key={img}>
        <img src={`./assets/${img}.png`} />
      </div>
    );
  });

  const url = "/localData/fakeData.json";
  // const url = "";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => fetchItem(json.data))
      .then(setLoading(false))
      .catch(setError);
  }, []);

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

  if (!items) return <p>This list is empty</p>;

  if (items) {
    return (
      <div>
        <ul className={styles.cardList}>
          {items.map((item, icons) => (
            <li className={styles.cardItems} key={item.id}>
              {iconsArray[icons]}
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <a className={styles.data__learnmore} href="#">
                Learn More
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
export default UseFetchApi;
