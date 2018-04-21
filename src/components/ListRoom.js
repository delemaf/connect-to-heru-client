import React from 'react';
// import { Link } from 'react-router-dom';
import { MenuItem } from 'react-bootstrap';

export default class ListRoom extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
    };

    this.items = props.items;
    console.log(this.item);
    // this.items = [
    //   { name: 'test', link: '/about' },
    //   { name: 'rainbow', link: '/rainbow' },
    // ];
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const listItems = this.items.map(item => (
      <MenuItem key="{item.name}">{item.name}</MenuItem>
    ));

    return <div>{listItems}</div>;
  }
}
