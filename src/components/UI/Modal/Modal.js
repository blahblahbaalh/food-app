import styles from "./modal.module.css";

function Modal({ children, className, ...props }) {
  return (
    <>
      <div className={`${styles.center} ${className}`}>
        {children}
      </div>
    </>
  );
}

export default Modal;
