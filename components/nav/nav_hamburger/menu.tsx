import React from 'react';
import classNames from 'classnames';

export default function Menu ({open}: 
  {open: boolean}) {
    
    return (
      <div className={classNames('z-10 transition-all ease-in fixed w-screen h-screen \
       bg-gray-50 bg-opacity-50', {'opacity-0': !open})}>
        
      </div>
    );
}