import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';

function Blog({ goalArticle }) {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center md:items-start lg:flex-row mt-5 w-full overflow-x-hidden text-right gap-2 sm:pr-3'>
        <RightSide goalArticle={goalArticle}/>
        <LeftSide/>
      </div>
    </div>
  )
}

export default Blog