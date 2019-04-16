import React, {Component} from 'react';
import './CircleSelector.css';

// const CircleSelector  = (props) => {
class CircleSelector extends Component {
  
  render(){
    // console.log('circle ', this.props.circleSelected);
    return (
      <div className='CircleSelector'>
          <button
            onClick={() => this.props.handleCircleSelect(1)}
            className={this.props.circleSelected === 1 ? "selected" : "unselected"}
          >SELECT CIRCLE 1</button>
          <button
            onClick={() => this.props.handleCircleSelect(2)}
            className={this.props.circleSelected === 2 ? "selected" : "unselected"}
          >SELECT CIRCLE 2</button>
          <button
            onClick={() => this.props.handleCircleSelect(3)}
            className={this.props.circleSelected === 3 ? "selected" : "unselected"}
          >SELECT CIRCLE 3</button>
          <button
            onClick={() => this.props.handleCircleSelect(4)}
            className={this.props.circleSelected === 4 ? "selected" : "unselected"}
          >SELECT CIRCLE 4</button>
      </div>
      );
  }
};

export default CircleSelector;