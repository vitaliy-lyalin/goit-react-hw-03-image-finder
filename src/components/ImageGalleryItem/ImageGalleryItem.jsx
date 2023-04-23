import { GalleryItem, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ webformatURL, tags }) => (
  <GalleryItem>
    <Image src={webformatURL} alt={tags} />
  </GalleryItem>
);

export default ImageGalleryItem;
