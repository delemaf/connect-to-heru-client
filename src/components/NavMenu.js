import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, Navbar, MenuItem, Nav } from 'react-bootstrap';
// import ListRoom from './ListRoom';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
    };
    this.items = [
      { name: 'test', link: '/about' },
      { name: 'rainbow', link: '/rainbow' },
    ];

    const rooms = [];
    this.items.forEach((item) => {
      rooms.push(<MenuItem>{item.name}</MenuItem>);
    });
    this.rooms = rooms;
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Abollo Chat</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about-us">Rooms</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about-us">About</Link>
            </MenuItem>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <MenuItem>Action</MenuItem>
              <MenuItem>Another action</MenuItem>
              <MenuItem>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem>Separated link</MenuItem>
            </NavDropdown>
            <MenuItem divider />
            <MenuItem header>Header</MenuItem>
            <MenuItem>
              <Link to="/room/">About</Link>
            </MenuItem>
            {/* <ListRoom items="items" /> */}
            {this.rooms}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
