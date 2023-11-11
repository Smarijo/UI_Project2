import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/courses/senior-design/syllabus">
        Course Home
      </a>
      <a className="menu-item" href="/courses/senior-design/announcements">
        Announcements
      </a>
      <a className="menu-item" href="/courses/senior-design/assignments">
        Assignments
      </a>
      <a className="menu-item" href="/courses/senior-design/grades">
        Grades
      </a>
      <a className="menu-item" href="/courses/senior-design/modules">
        Modules
      </a>
      <a className="menu-item" href="/courses/senior-design/files">
        Files
      </a>
      <a className="menu-item" href="/courses/senior-design/zoom">
        Zoom
      </a>
    </Menu>
  );
};