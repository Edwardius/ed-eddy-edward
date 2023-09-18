import React from 'react';
import classNames from 'classnames';

export default function ConnectButton ({connect_open, setOpen}: 
  {connect_open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {

  return(
    <button className={classNames('transition-colors backdrop-blur-xs ease-in bg-black bg-opacity-3 hover:bg-opacity-10 \
            py-1.5 px-4 rounded text-xs uppercase font-mono font-100')} onClick={() => setOpen(!connect_open)}>
        Connect
    </button>
  );
}