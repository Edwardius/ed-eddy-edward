import React from 'react';
import classNames from 'classnames';
import GenericItem from './menu_items/generic_item';

export default function Menu ({open, active_page}: 
  {open: boolean, active_page: string}) {
    
    return (
      <div className={classNames('pt-20 px-6 z-20 fixed transition h-screen w-screen ease-in backdrop-blur-sm bg-gray-100 \
      bg-opacity-60', {'opacity-0 -z-10': !open})}>
        <ul className='w-full'>
          <li><GenericItem text='Connect' href='/connect' active={active_page} open={open}/></li>
          <li><GenericItem text='Mindmap' href='/mind_map' active={active_page} open={open}/></li>
          <li><GenericItem text='Projects' href='/projects' active={active_page} open={open}/></li>
          <li><GenericItem text='Leadership' href='/leadership' active={active_page} open={open}/></li>
          <li><GenericItem text='Future' href='/future' active={active_page} open={open}/></li>
          
        </ul>
      </div>
    );
}