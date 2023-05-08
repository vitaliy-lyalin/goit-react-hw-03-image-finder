import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ gallery, showModal }) => {
  return (
    <ImageGalleryList>
      {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onGalleryItemClick={() => {
            showModal(largeImageURL, tags);
          }}
        />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;
