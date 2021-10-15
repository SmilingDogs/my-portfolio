import "./PortfolioItem.scss";

const PortfolioItem = ({ title, img, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="item">
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default PortfolioItem;
