function Header() {
    return (
        <>
        <header className="header-grid">
            <img className="header-image" src="/Logo.svg" alt="littlelemonlogo" />
        <nav className="navigation">
            <ul>
                <li><a href="https://www.google.com/">Home</a></li>
                <li><a href="https://www.google.com/">About</a></li>
                <li><a href="https://www.google.com/">Menu</a></li>
                <li><a href="https://www.google.com/">Reservations</a></li>
                <li><a href="https://www.google.com/">Online Orders</a></li>
                <li><a href="https://www.google.com/">Login</a></li>
            </ul>
        </nav>
        </header>
        </>
    );
}

export default Header;
