import * as React from "react";
import Tag from "./Tag";
import { connect } from "react-redux";
import Tags from "../../model/Tag";

export interface TagListProps {
  tags: Tags;
}

const TagList: React.SFC<TagListProps> = ({ tags }) => {
  console.log(tags);

  return (
    <div className="tag-list">
      {tags.tags.map(tag => (
        <Tag tag={tag} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: { tags: Tags }) => {
  return { tags: state.tags };
};

export default connect(mapStateToProps)(TagList);
