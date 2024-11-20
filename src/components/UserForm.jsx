import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users/userSlice';

const UserForm = () => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    sport: '',
    club: '',
    coach: '',
    achievement: '',
    status: '',
    progress: '',
    registrationDate: '',
    coachHistory: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));  // Добавление пользователя в state
    setUser({
      id: '',
      name: '',
      sport: '',
      club: '',
      coach: '',
      achievement: '',
      status: '',
      progress: '',
      registrationDate: '',
      coachHistory: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={user.id}
        onChange={handleChange}
        placeholder="ID"
      />
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="sport"
        value={user.sport}
        onChange={handleChange}
        placeholder="Sport"
      />
      <input
        type="text"
        name="club"
        value={user.club}
        onChange={handleChange}
        placeholder="Club"
      />
      <input
        type="text"
        name="coach"
        value={user.coach}
        onChange={handleChange}
        placeholder="Coach"
      />
      <input
        type="text"
        name="achievement"
        value={user.achievement}
        onChange={handleChange}
        placeholder="Achievement"
      />
      <input
        type="text"
        name="status"
        value={user.status}
        onChange={handleChange}
        placeholder="Status"
      />
      <input
        type="text"
        name="progress"
        value={user.progress}
        onChange={handleChange}
        placeholder="Progress"
      />
      <input
        type="date"
        name="registrationDate"
        value={user.registrationDate}
        onChange={handleChange}
        placeholder="Registration Date"
      />
      <input
        type="text"
        name="coachHistory"
        value={user.coachHistory}
        onChange={handleChange}
        placeholder="Coach History"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
