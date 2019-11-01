import * as React from "react";
import { connect } from "react-redux";

import ArticlePreview from "./ArticlePreview";
import Article from "../../model/IArticle";
import { useParams } from "react-router";

export interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FunctionComponent<ArticleListProps> = ({
  articles
}) => {
  const params = useParams();
  console.log(params);

  return (
    <>
      {articles.map((article, i) => (
        <ArticlePreview key={i} article={article} />
      ))}
    </>
  );
};

const mapStateToProps = (state: { articles: Article[] }) => {
  return { articles: state.articles };
};

export default connect(mapStateToProps)(ArticleList);
