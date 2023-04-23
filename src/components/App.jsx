import { React, Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { Container } from './App.styled';
import { fetchImages } from 'services/fetch';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    // console.log(prevState.searchQuery);
    if (prevState.query !== query && query) {
      this.getImages();
    }
  }
  getImages = () => {
    const { query, page, gallery } = this.state;
    fetchImages(query, page).then(data => {
      console.log(data.hits);
      //   const hits = data.hits;
      //   this.setState(prev => ({
      //     gallery: [...prev.gallery, ...hits],
      //   })).catch(error => error.message);
    });
  };

  handleSearch = query => {
    this.setState({ query });
  };

  render() {
    const { gallery } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearch}></Searchbar>
        <ImageGallery gallery={gallery}></ImageGallery>
      </Container>
    );
  }
}
