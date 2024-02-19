import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} by WordWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
