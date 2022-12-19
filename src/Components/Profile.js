import React, { useEffect } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { get_current } from "../redux/Action/Authaction";
const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  const client = useSelector((state) => state.authreducer.client);
  console.log(client);
  return (
    <div>
      <div className="body">
        <div className="card-container">
          <span className="pro">PRO</span>
          <img
            className="round"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
          <h3>{client.email}</h3>
          <h6>New York</h6>
          <p>
            User interface designer and <br /> front-end developer
          </p>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary ghost">Following</button>
          </div>
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>UI / UX</li>
              <li>Front End Development</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
