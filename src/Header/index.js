import "./style.css";

const Header = (props) => (
    <header className="header">
        {props.title}
    </header>
);

export default Header;