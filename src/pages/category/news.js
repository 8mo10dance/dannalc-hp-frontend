import React from "react";
import { Link } from "gatsby";
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

const NewsSide = ({ recentlyNews, archives }) => {
  return (
    <div className="news_side">
      <div className="news_side__card">
        <h3 className="news_side__title">最近の投稿</h3>
        <div className="news_side__body">
          <RecentlyNewsList news={recentlyNews} />
        </div>
      </div>
      <div className="news_side__card">
        <h3 className="news_side__title">カテゴリー</h3>
        <div className="news_side__body">
          <NewsCategoryList />
        </div>
      </div>
      <div className="news_side__card">
        <h3 className="news_side__title">アーカイブ</h3>
        <div className="news_side__body">
          <NewsArchiveList archives={archives} />
        </div>
      </div>
    </div>
  );
};

const RecentlyNewsList = ({ news }) => {
  return (
    <ul className="recently-news-list">
      {news.map((n) => (
        <li key={n.id} className="recently-news-list__item">
          <Link to="#">
            <p className="recently-news-list__item-title">{n.title}</p>
            <p className="recently-news-list__item-published-at">
              {n.publishedAt}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const NewsCategoryList = () => {
  return (
    <div className="news-category-list">
      <Link to="/category/event/" className="news-category-list__item">
        イベント
      </Link>
      <Link to="/category/news/" className="news-category-list__item">
        お知らせ
      </Link>
    </div>
  );
};

const NewsArchiveList = ({ archives }) => {
  return (
    <ul className="news-archive-list">
      {archives.map((a) => (
        <li key={`${a.year}-${a.month}`} className="news-archive-list__item">
          <Link to={`/${a.year}/${a.month}/`}>{`${a.year}年${a.month}月`}</Link>
        </li>
      ))}
    </ul>
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

  const archives = [
    {
      year: 2022,
      month: 7,
    },
    {
      year: 2022,
      month: 7,
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
        <div className="news__side">
          <NewsSide recentlyNews={news} archives={archives} />
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
