import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Sport</th>
            <th>Club</th>
            <th>Coach</th>
            <th>Achievement</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Registration Date</th>
            <th>Coach History</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.sport}</td>
              <td>{user.club}</td>
              <td>{user.coach}</td>
              <td>{user.achievement}</td>
              <td>{user.status}</td>
              <td>{user.progress}</td>
              <td>{user.registrationDate}</td>
              <td>{user.coachHistory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
