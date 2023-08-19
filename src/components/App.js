import React, { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    images:[],
    query:'',
    page:1,
  };
componentDidUpdate(prevProps,prevState){
  if(prevState.query !==this.state.query || prevState.page!==this.state.page){
    console.log(this.slicedQuery())
    
  }
}

  changeQuery=(newQuery)=>{
    this.setState({
      query:`${Date.now()}/${newQuery}`,
      images:[],
      page:1,
    })
  }
  handleLoadMore=()=>{
    this.setState(prevState=>({
    page:prevState.page + 1
    }));
  };
  slicedQuery = ()=>{
    const index=this.state.query.indexOf('/');
    if(index!==-1){}
    const queryLength = this.state.query.length
    return this.state.query.slice(index+1,queryLength);
    
  } 

  
  render() {
    const API_KEY = '38308100-c8bfe7ecfd47e0eeb8c400dc4';
  
    
    return (
      <div>
        <div>
          <Searchbar changeQuery={this.changeQuery}/>
        </div>
        <div>
          <ImageGallery />
        </div>
        <div>
          <Loader />
        </div>
        <div>
          <Button loadMore={this.handleLoadMore} />
        </div>
        <div>
          <Modal />
        </div>
      </div>
    );
  }
}
