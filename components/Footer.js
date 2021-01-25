import styles from '../styles/footer.module.scss';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy;{new Date().getFullYear()} by Miller Runners. All rights reserved.</p>
        </footer>
    );
};

export default Footer;