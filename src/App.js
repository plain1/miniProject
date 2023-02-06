import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  
  return <Menu item={items}></Menu>;
}

export default App;
