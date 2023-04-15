import styles from "../styles/SocialBar.module.css";

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      <a href="https://www.facebook.com/lainternacional.materiales" target="_blank" rel="">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/lainternacionalferreteriay/?fbclid=IwAR08ow30fqOwsgz4kluqZPbhoylhNvhGrXqrG7MYX6JatZjwrD1dPvL9Cko" target="_blank" rel="">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};

export default SocialBar;