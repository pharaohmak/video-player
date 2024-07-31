import React from 'react';

export class Menu extends React.Component {
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="button" value="fast" />
        <input type="button" value="slow" />
        <input type="button" value="cute" />
        <input type="button" value="eek" />
      </form>
    );
  }

  handleClick = (e) => {
    const text = e.target.value;
    this.props.chooseVideo(text);
  };
}