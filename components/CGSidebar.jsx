import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/courses/computer-graphics/syllabus">
        Course Home
      </a>
      <a className="menu-item" href="/courses/computer-graphics/announcements">
        Announcements
      </a>
      <a className="menu-item" href="/courses/computer-graphics/assignments">
        Assignments
      </a>
      <a className="menu-item" href="/courses/computer-graphics/grades">
        Grades
      </a>
      <a className="menu-item" href="/courses/computer-graphics/modules">
        Modules
      </a>
      <a className="menu-item" href="/courses/computer-graphics/files">
        Files
      </a>
      <a className="menu-item" href="/courses/computer-graphics/zoom">
        Zoom
      </a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a className="menu-item" href="/home">
        Go to Main Page
      </a>
    </Menu>
  );
};