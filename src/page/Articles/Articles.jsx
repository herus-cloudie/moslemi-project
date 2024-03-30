import React from 'react';
import { Helmet } from 'react-helmet';
import Blogs from '../../Components/Blogs/Blogs';

const Articles = ({currentItems}) => {

  return (
    <>
      <Helmet>
        <title>نهال آی تی | مقالات</title>
      </Helmet>
      <Blogs currentItems={currentItems}/>
    </>
  )
}

export default Articles;
