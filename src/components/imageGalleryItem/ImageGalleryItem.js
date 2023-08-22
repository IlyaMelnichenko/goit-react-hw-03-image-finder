import React, { Component } from 'react';
import { CustomModal } from '../modal/Modal';
import { GalleryListImage } from './StyledGalleryItem';
export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    isLoadingImage: false,
  };
   openModal = () => {
    this.setState({ isModalOpen: true,isLoadingImage: true,  });

    // const largeImage = new Image();
    // largeImage.onload = () => {
    //   this.setState({ isLoadingImage: false });
    // };
    // largeImage.onerror = () => {
    //   this.setState({ isLoadingImage: false });
    //   console.error('Error loading image');
    // };
    // largeImage.src = this.props.image.largeImageURL;
  };
    closeModal = () => this.setState({ isModalOpen: false });
    afterOpen=()=>this.setState({isLoadingImage: false,})

  render() {
    const {image}=this.props;
    const { isLoadingImage, isModalOpen } = this.state;
    return (
      <>
       <GalleryListImage onClick={this.openModal} src={image.webformatURL} alt=''></GalleryListImage>
       <CustomModal 
       isOpen={isModalOpen}
       onModalClose={this.closeModal}
       isLoadingImage={isLoadingImage}
       image={image.largeImageURL}
       afterOpen={this.afterOpen}
       />
      </>

   
    )
  }
}
