import React from 'react';

const PhotoFrame = ({url,title}) => {
   return (
   <div className='photframe'>
     <img src={url} alt={title} />
     <div className="caption">{title}</div>
   </div>
   );
};
export default PhotoFrame;