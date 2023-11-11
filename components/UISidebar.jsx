import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/courses/ui/syllabus">
        Course Home
      </a>
      <a className="menu-item" href="/courses/ui/announcements">
        Announcements
      </a>
      <a className="menu-item" href="/courses/ui/assignments">
        Assignments
      </a>
      <a className="menu-item" href="/courses/ui/grades">
        Grades
      </a>
      <a className="menu-item" href="/courses/ui/modules">
        Modules
      </a>
      <a className="menu-item" href="/courses/ui/files">
        Files
      </a>
      <a className="menu-item" href="/courses/ui/zoom">
        Zoom
      </a>
    </Menu>
  );
};