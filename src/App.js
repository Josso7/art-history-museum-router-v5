import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import {Route, useParams} from 'react-dom-router'


const galleries = harvardArt.records;

function App() {
  const {id} = useParams();
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} />
      <Route>
          <GalleryView galleries={harvardArt.records}></GalleryView>
      </Route>
    </div>
  );
}

export default App;
