import React from 'react'

export default function NavList({listItems}) {
    const list = listItems.map((listItem, index) => (<li className="list-item" key={index}>{listItem}</li>));
  return (
    <div className='list-items'>
      <ul >
        {list}
      </ul>
    </div>
  );
}
