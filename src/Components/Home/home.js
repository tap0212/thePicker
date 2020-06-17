import React from 'react';
import One from '../../Data/blue.json'
import Two from '../../Data/red.json'
import Three from '../../Data/green.json'
import Four from '../../Data/yellow.json'
import Five from '../../Data/grey.json'
import Six from '../../Data/random.json'
import Tile from '../Tile/tile'
import Nav from '../Nav/nav'
import LoadingOverlay from 'react-loading-overlay';

import './home.scss'
function App() {
  const [isFetching, setIsFetching] = React.useState(false)

  return (
    <div className="App">
    <Nav />
    <LoadingOverlay
                active={isFetching}
                spinner
                text='Fetching the canvas...'
                
        >
             
     <Tile data={Two} setIsFetching={setIsFetching} text={"Bloody Red"}/>
     <Tile data={One} setIsFetching={setIsFetching} text={"Beautiful Blue"}/>
     <Tile data={Three} setIsFetching={setIsFetching} text={"Earth Green"}/>
     <Tile data={Four} setIsFetching={setIsFetching} text={"Yeezy Yellow"}/>
     <Tile data={Five} setIsFetching={setIsFetching} text={"Old Grey"}/>
     <Tile data={Six} setIsFetching={setIsFetching} text={"Truly Trendy"}/>
     </LoadingOverlay>
    </div>
  );
}

export default App;
