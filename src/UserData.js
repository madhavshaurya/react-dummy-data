import React, { useState, useEffect } from 'react';
import './dark-mode.css'; // Import the dark mode CSS file

function UserData() {
  const [userData, setUserData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUserData(data.users)); // Extract the "users" array
  }, []);

  const darkModeClass = isDarkMode ? 'dark-mode' : ''; // Define a class for dark mode

  return (
    <div className={`user-data ${darkModeClass}`}>
      <h1 style={{ textAlign: 'center', margin: '1rem' }}>Dummy Data</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>ProfilePic</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.image}
                  alt={`${user.username}'s profile`}
                  style={{ width: '30px' }}
                />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserData;
