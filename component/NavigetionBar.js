import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'; // Import the CSS file

export default function NavigationBar() {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home" className="navigation-bar">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-auto dr-computer-house"> {/* Add this item */}
          <Nav.Link disabled>
            DR COMPUTER HOUSE
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
