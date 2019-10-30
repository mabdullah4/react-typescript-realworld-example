import * as React from "react";

import Article from "./../../model/Article";

export interface ArticlePreviewProps {
  article: Article;
}

const ArticlePreview: React.FunctionComponent<ArticlePreviewProps> = ({
  article
}) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={article.author.image} alt={article.author.username} />
        </a>
        <div className="info">
          <a href="" className="author">
            {article.author.username}
          </a>
          <span className="date">{article.createdAt.toLocaleDateString()}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{article.slug}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
};

export default ArticlePreview;
