import React, { Component } from 'react';
import './index.css';

export default class Grid extends Component {
  renderGrid = (row, col) => {
    const gridItems = [];
    for (let i = 0; i < col; i++) {
      const rowItems = [];
      for (let j = 0; j < row; j++) {
        const key = `${i}-${j}`;
        rowItems.push(<div key={key} className="grid-item" />);
      }
      gridItems.push(
        <div key={i} className="grid-row">
          {rowItems}
        </div>
      );
    }
    return gridItems;
  };
  render() {
    const { row, col } = this.props;
    return <div className="grid-container">{this.renderGrid(row, col)}</div>;
  }
}