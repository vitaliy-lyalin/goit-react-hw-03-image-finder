import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags, onGalleryItemClick }) => (
  <GalleryItem onClick={onGalleryItemClick}>
    <Image src={webformatURL} alt={tags} />
  </GalleryItem>
);

export default ImageGalleryItem;
