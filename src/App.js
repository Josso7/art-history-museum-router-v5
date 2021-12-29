import './App.css';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import {Route, useParams} from 'react-router-dom'


const galleries = harvardArt.records;

function App() {
  // const url = useParams();
  // const {id} = useParams();
  // console.log(id);
  return (
    <div class="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>
  );
}

export default App;
