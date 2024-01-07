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
    
    
    return <>
    <div>
    {filters.map((filter) => <button onClick={this.chooseFilter}>{filter}</button>)}
    </div>
    {images.map((image) => {
        if (image.category === this.state.selected || this.state.selected === 'All') return <img scr={image.img} alt={image.category}/>
    })}
    </>
  }
}
