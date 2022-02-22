import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading__container}>
      <span className={styles.loading}>Loading ...</span>
    </div>
  );
}

export default Loading;
