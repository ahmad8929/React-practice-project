import styles from "./Navbar.module.css";


const Navbar = () => {
    return (
        <nav className={`${styles.navbar} container`}>

            <div className="logo">
                <img src="header.jpeg" alt="LOGO" />
            </div>

            <ul>
                <li href="# ">Home</li>
                <li href="# ">About</li>
                <li href="# ">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar