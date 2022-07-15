import React from "react";
import Layout from "../components/layout";
import Title from "../images/news/title.png";
import Bg from "../images/common/title-bg.png";

const NewsTitle = () => {
  return (
    <div className="news_title">
      <div className="news_title__bg">
        <img src={Bg} alt="" />
      </div>
      <div className="news_title__text">
        <img src={Title} alt="news" />
      </div>
    </div>
  );
};

const NewsPage = () => {
  return (
    <Layout>
      <div className="news">
        <div className="news__title">
          <NewsTitle />
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
