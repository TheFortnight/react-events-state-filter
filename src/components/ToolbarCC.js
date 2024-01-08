import React, { Component } from 'react'

export default class ToolbarCC extends Component {

    state = {
        selected: 'All',
    };

    constructor(props) {
        super(props);
        this.chooseFilter = this.chooseFilter.bind(this);
    };
    
    chooseFilter (event) {
        console.log(event.target.textContent)
        this.setState((state) => ({selected: event.target.textContent}));
    };

  render() {
    const { filters, images } = this.props;
    let keyCounter = 0;
    
    return <>
    <div>
    {filters.map((filter) => <button key={filter} onClick={this.chooseFilter}>{filter}</button>)}
    </div>
    <div className="image-container">
    {images.map((image) => {
        if (image.category === this.state.selected || this.state.selected === 'All') return <img key={keyCounter++} src={image.img} alt={image.category}/>
    })}
    </div>
    </>
  }
}
