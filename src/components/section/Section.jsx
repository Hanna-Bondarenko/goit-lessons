import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={styles.title}>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
