import React, { useEffect, useState } from "react";
import "./scroll.css"

const InfiniteScroll = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setCount((prevCount) => prevCount + 10);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(
      <div id="card" key={i}>
        {i + 1}
      </div>
    );
  }
  return <div className="App">{elements}</div>;
};

export default InfiniteScroll;
