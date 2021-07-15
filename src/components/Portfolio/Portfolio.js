import { useEffect, useState } from "react";
import "./Portfolio.scss";
import { categories } from "./list";
import PortfolioCategoryItem from "../PortfolioCategoryItem/PortfolioCategoryItem";
import { featuredPortfolio, mobilePortfolio, webPortfolio } from "./data";
import PortfolioItem from "../PortfolioItem/PortfolioItem";


const Portfolio = () => {
  const [selected, setSelected] = useState("React JS");
  const [portfolio, setPortfolio] = useState([]);

  const portfolioCategoryList = categories.map((i) => (
    <PortfolioCategoryItem
      key={i.id}
      title={i.title}
      onClick={() => setSelected(i.title)}
      active={selected === i.title}
    />
  ));

  const portfolioList = portfolio.map((i) => (
    <PortfolioItem key={i.id} item={i} />
  ));

  useEffect(() => {
   
    switch (selected) {
      case "React JS":
        setPortfolio(featuredPortfolio);
        break;
      case "Mini Projects":
        setPortfolio(webPortfolio);
        break;
      case "Mobile App":
        setPortfolio(mobilePortfolio);
        break;
      default:
        setPortfolio(featuredPortfolio);
    }
  }, [selected]);

  
  return (
    <div className="portfolio" id="portfolio">
      <h2 data-aos="fade-left">Portfolio</h2>
      <ul>{portfolioCategoryList}</ul>
      <div data-aos="fade-right" className="container">{portfolioList}</div>
    </div>
  );
};

export default Portfolio;
