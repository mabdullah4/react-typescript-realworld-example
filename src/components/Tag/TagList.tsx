import * as React from "react";
import Tag from "./Tag";
import { connect } from "react-redux";
import ITags from "../../model/ITag";

export interface TagListProps {
    tags: ITags;
}

const TagList: React.FunctionComponent<TagListProps> = ({ tags }) => {
    return (
        <div className="tag-list">
            {tags.tags.map((tag, i) => (
                <Tag key={i} tag={tag} />
            ))}
        </div>
    );
};

const mapStateToProps = (state: { tags: ITags }) => {
    return { tags: state.tags };
};

export default connect(mapStateToProps)(TagList);
