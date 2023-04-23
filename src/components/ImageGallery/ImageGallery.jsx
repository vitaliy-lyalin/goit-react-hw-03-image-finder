import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ gallery }) => {
  return (
    <ImageGalleryList>
      {gallery.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;
