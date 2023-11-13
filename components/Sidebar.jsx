import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { useParams } from 'react-router-dom';

export default props => {
  const params = useParams();
  const courseName = params.course;
  return (
    <Menu>
      <a className="menu-item" href={"/courses/" + courseName}>
        Course Home
      </a>
      <a className="menu-item" href={"/courses/" + courseName + "/announcements"}>
        Announcements
      </a>
      <a className="menu-item" href={"/courses/" + courseName + "/assignments"}>
        Assignments
      </a>
      <a className="menu-item" href={"/courses/" + courseName + "/grades"}>
        Grades
      </a>
      <a className="menu-item" href={"/courses/" + courseName + "/modules"}>
        Modules
      </a>
      <a className="menu-item" href={"/courses/" + courseName + "/files"}>
        Files
      </a>
      <a className="menu-item" href={"/courses/" + courseName + "/zoom"}>
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