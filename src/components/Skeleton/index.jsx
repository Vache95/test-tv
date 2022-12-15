import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={250}
    viewBox="0 0 200 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="27" y="56" rx="0" ry="0" width="184" height="237" />
  </ContentLoader>
);

export default MyLoader;
