import Icons from "../Icons/Icons";
import "./Topbar.scss";

const Topbar = ({ open, changeStyle }) => {
  return (
    <div className={open ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Web Dev
          </a>
          <div className="itemContainer">
            <Icons type="person" filled={open ? true : false} />
            <span>+380 95 202 8054</span>
          </div>
          <div className="itemContainer">
            <Icons type="mail" filled={open ? true : false} />
            <span>a.kudr74@gmail.com</span>
          </div>
          <div className="itemContainer">
            <Icons type="telegram" filled={open ? true : false} />
            <Icons type="whatsapp" filled={open ? true : false} />
          </div>
        </div>
        <div className="right">
          <div className="burger" onClick={() => changeStyle(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
