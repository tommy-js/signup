import React from "react";
import MultipleChoice from "./examples/MultipleChoice.tsx";
import StockPage from "./examples/StockPage.tsx";
import StockChart from "./examples/StockChart.tsx";
import Community from "./examples/Community.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        We at BIT are building MarketCap, an all-inclusive stock education and
        social media platform.
      </h1>
      <h2>What is Marketcap?</h2>
      <h3>
        In mid-2020 our founder, Tyler Blovat, recognized that there is a
        distinct lack of easily accessible educational resources for those
        looking to get into stocks and trading. To remedy this, we began working
        on a platform everyday people could use to learn about how the market
        works and how to make money in it. Since then, we've come a long way,
        and today we'd like to share some of the features we've been working on.
      </h3>
      <h2>Interactive Tutorials</h2>
      <h3>
        We at BIT believe technology can be used to better education ourselves
        and to experience life in a new way. It is our goal to expand the
        capabilities of the internet to better empower us all, and to build a
        better future.
      </h3>
      <h3>
        To that end, one of the most important goals of MarketCap is to provide
        easy to digest tutorials on all manner of topics, from the basics of
        trading to the intricacies of options.
      </h3>
      <MultipleChoice />
      <h2>Market Simulation</h2>
      <h3>
        MarketCap operates a fully-functional simulated market, complete with
        real-time prices, news, and updates. This makes it easy to test
        hypotheses, learn in a realistic environment, and make mistakes without
        the threat of losing real money.
      </h3>
      <StockChart />
      <h3>
        To stand alongside this, we have all the features you would expect from
        a real broker; charts, data, news as you need it, and market sentiment.
      </h3>
      <StockPage />
      <h2>Conversation</h2>
      <h3>
        Discuss your theories, comment on stocks, post analysis, and make bets
        with others on the direction the stock is going to take. Post your own
        sentiment on any particular stock or user trade. Make friends, follow
        others and gain followers yourself. MarketCap is a fully capable social
        media site, both for those looking for serious analysis and for those
        simply trying to find the latest #TSLA meme. Viewers of WallStreetBets
        are welcome as are viewers of the Wall Street Journal; you make your own
        community, which help motivate your decisions.
      </h3>
      <Community />
    </div>
  );
}

export default App;
