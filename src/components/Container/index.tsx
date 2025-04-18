import styles from './Container.module.css';

type ContainerProps = {
    children: React.ReactNode;
};

function Container({children}: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Container
