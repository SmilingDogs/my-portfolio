import "./PortfolioItem.scss";

const PortfolioItem = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noreferrer">
      <div className="item">
        <img src={item.img} alt={item.title} />
        <h3>{item.title}</h3>
      </div>
    </a>
  );
};

export default PortfolioItem;
