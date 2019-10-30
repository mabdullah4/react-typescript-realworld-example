import * as React from "react";

export interface BannerProps {}

const Banner: React.FunctionComponent<BannerProps> = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
