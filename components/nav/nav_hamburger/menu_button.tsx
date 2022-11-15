import React from 'react';
import classNames from 'classnames';

export default function MenuButton ({open, setOpen}: 
  {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {

  return(
    <button className={classNames('z-20 transition ease-in px-3 py-4 rounded bg-black \
    bg-opacity-5 hover:bg-opacity-10', {'bg-opacity-0 hover:bg-opacity-0': open})} 
    onClick={() => setOpen(!open)}>
      <div className={classNames(`tham tham-e-spin tham-w-8`, { 'tham-active': open })}>
        <div className="tham-box">
          <div className="tham-inner" />
        </div>
      </div>
    </button> 
  );
}