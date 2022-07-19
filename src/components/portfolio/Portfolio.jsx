import "./portfolio.scss"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("about_me");
  const list = [
    {
      id: "about_me",
      title: "About Me",
    },
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "web_development",
      title: "Web Devlopment",
    },
    {
      id: "Writing",
      title: "Writing",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
        <h1> Portfolio</h1>
        <ul>
        {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          <div className="item">
            <img
              src="https://i.pinimg.com/originals/95/ba/ff/95baff8df4348f995884d5f7d55f3518.jpg"
              // src="https://static.vecteezy.com/system/resources/previews/006/427/218/non_2x/abstract-pink-or-apricot-watercolor-background-with-gold-texture-blush-fluid-painting-spring-wedding-invitation-dusty-rose-or-veil-texture-alcohol-ink-vector.jpg"
              alt=""
            />
          </div>

          <div className="item">
            <img
              src="https://i.pinimg.com/originals/95/ba/ff/95baff8df4348f995884d5f7d55f3518.jpg"
              // src="https://static.vecteezy.com/system/resources/previews/006/427/218/non_2x/abstract-pink-or-apricot-watercolor-background-with-gold-texture-blush-fluid-painting-spring-wedding-invitation-dusty-rose-or-veil-texture-alcohol-ink-vector.jpg"
              alt=""
            />
          </div>
        </div>
    </div>
  )
}
