import React, { Component } from 'react';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    isLoadingImage: false,
  };



  render() {
    const {images}=this.props;
    const { isLoadingImage, isModalOpen } = this.state;
    return (
    <img src={images} width="200"></img>
    )
  }
}
