import {useParams} from 'react-router-dom';

function GalleryView({galleries}) {
    const {galleryId} = useParams()
    const galleryChoice = galleries.find((gallery) => gallery.gallerynumber === galleryId)
    return (
        <div>
            <h1>GalleryView</h1>
            <h2>{galleryChoice.name}</h2>
        </div>
        );
}
export default GalleryView;