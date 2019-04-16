import React, {Component} from 'react';
import './Circles.css';

class Circles extends Component {
  render(){
    return (
        <div className='Circles'>
            <div
              className={this.props.circleSelected === 1 ? "selected" : "unselected"}
              >1
            </div>
            <div
              className={this.props.circleSelected === 2 ? "selected" : "unselected"}
              >2
            </div>
            <div
              className={this.props.circleSelected === 3 ? "selected" : "unselected"}
              >3
            </div>
            <div
              className={this.props.circleSelected === 4 ? "selected" : "unselected"}
              >4
            </div>
        </div>
    );
  }
};

export default Circles;