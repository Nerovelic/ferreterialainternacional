import styles from "../styles/SocialBar.module.css";

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      <a href="https://www.facebook.com/lainternacional.materiales" target="_blank" rel="">
        <i className="fab fa-facebook-f"></i>
      </a>
    </div>
  );
};

export default SocialBar;