const Footer = () => {

    const date = new Date();

    return (
        <footer className="text-center p-2 text-muted">
            &copy; {date.getFullYear() } - DevHub Community
        </footer>
    )
}

export default Footer;