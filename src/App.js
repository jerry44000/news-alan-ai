import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newsCards/NewsCards.js";
import alan from "./assets/alanai.png";
import './styles.css';
import { ClassNames } from "@emotion/react";

const alanKey =
  "83e50503b05818cc51aef5321ec0adfa2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
 
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          console.log(articles);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Alan AI : News</h1>
      <div className="maineImage">
        <img src={alan} alt="alan logo" className="alan" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
