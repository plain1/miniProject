import React from 'react';

const Menu = (props) => {

  return (
    <div className='section-center'>
      {props.item.map((i)=>{
        const {id, title, category, price, img, desc} = i;
        return <h2>{title}</h2>;
      })}
    </div>
  );
};

export default Menu;
