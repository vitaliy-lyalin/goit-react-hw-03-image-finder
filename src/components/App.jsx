import { React, Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { Container } from './App.styled';
import { fetchImages } from 'services/fetch';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
    largeImage: '',
    tags: '',
    isShowModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, gallery } = this.state;

    // console.log(prevState.searchQuery);
    if ((prevState.query !== query && query) || prevState.page !== page) {
      this.getImages();
    }
    if (gallery !== prevState.gallery && page > 1) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 250);
    }
  }
  getImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    fetchImages(query, page)
      .then(data => {
        console.log(data.hits);
        const hits = data.hits;

        this.setState(prev => ({
          gallery: [...prev.gallery, ...hits],
          isLoading: false,
        }));
      })
      .catch(error => error.message)
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSearch = query => {
    this.setState({ query, page: 1, gallery: [] });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  hideModal = () => {
    this.setState({ isShowModal: false, largeImage: null, tags: null });
  };

  showModal = () => this.setState({ isShowModal: true });

  render() {
    const { gallery, isLoading, largeImage, tags, isShowModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && <Loader />}
        {gallery.length > 0 && (
          <ImageGallery gallery={gallery} showModal={this.showModal} />
        )}
        {gallery.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {isShowModal && (
          <Modal url={largeImage} alt={tags} hideModal={this.hideModal} />
        )}
      </Container>
    );
  }
}
