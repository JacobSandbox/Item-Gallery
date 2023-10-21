// Footer for gallery app
function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className="footer">
            <p>(C) Jacob Salemi {year}</p>
        </div>
    );
}

export default Footer;
