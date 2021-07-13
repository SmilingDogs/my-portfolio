import "./Menu.scss";
import Icons from "../Icons/Icons";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={isMenuOpen ? "menu active" : "menu"}>
      <ul onClick={() => setIsMenuOpen(false)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <ul className="menu-contacts">
        <li>
          <Icons type="person" filled />
          <span>+380 50 331 59 92</span>
        </li>
        <li>
          <Icons type="mail" filled />
          <span>a.kudr74@gmail.com</span>
        </li>
        <li>
          <Icons type="telegram" filled />
          <span>Smiling Dog</span>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
