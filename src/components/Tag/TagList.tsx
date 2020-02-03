import * as React from "react";
import Tag from "./Tag";
import { connect } from "react-redux";
import Tags from "../../model/ITag";

export interface TagListProps {
    tags: Tags;
}

const TagList: React.SFC<TagListProps> = ({ tags }) => {
    return (
        <div className="tag-list">
            {tags.map((tag, i) => (
                <Tag key={i} tag={tag} />
            ))}
        </div>
    );
};

const mapStateToProps = (state: { tags: Tags }) => {
    return { tags: state.tags };
};

export default connect(mapStateToProps)(TagList);
