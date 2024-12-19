import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './App.css';
import { selectCurrentUser } from './selectors/user.selectors';
import { setUser } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [userName, setUserName] = useState('');

  const handleAddUser = () => {
    if (userName.trim()) {
      dispatch(setUser({ name: userName })); // Set the user with the name
      setUserName(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <h1>Current User</h1>
      {currentUser ? (
        <p>User Name: {currentUser.name}</p>
      ) : (
        <p>No user added yet</p>
      )}

      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter user name"
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
}

export default App;
