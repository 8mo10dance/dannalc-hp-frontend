import React from "react";
import Layout from "../../components/layout";
import Title from "../../images/news/title.png";
import Bg from "../../images/common/title-bg.png";

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

const NewsList = ({ news }) => {
  return (
    <ul className="news_list">
      {news.map((news) => (
        <li key={news.id} className="news_list__item">
          <NewsItem {...news} />
        </li>
      ))}
    </ul>
  );
};

const NewsItem = ({ title, publishedAt, content }) => {
  return (
    <div className="news-item">
      <div className="news-item__info">
        <span className="news-item__published-at">{publishedAt}</span>
      </div>
      <h2 className="news-item__title">{title}</h2>
      <article className="news-item__article">{content}</article>
    </div>
  );
};

const NewsPage = () => {
  const news = [
    {
      id: 1,
      title: "hoge",
      content: "fuga",
      publishedAt: "2022-01-01",
    },
    {
      id: 2,
      title: "hoge",
      content: "fuga",
      publishedAt: "2022-01-01",
    },
  ];

  return (
    <Layout>
      <div className="news">
        <div className="news__title">
          <NewsTitle />
        </div>
        <div className="news__list">
          <NewsList news={news} />
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
