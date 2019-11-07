import * as React from "react";
import { Link } from "react-router-dom";

export interface TagProps {
    tag: string;
}

const Tag: React.FunctionComponent<TagProps> = ({ tag }) => {
    return (
        <Link to="tags" className="tag-pill tag-default">
            {tag}
        </Link>
    );
};

export default Tag;
