import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user, setUser } = useAuth();

  return user ? (
    <>
      <h2>Welcome, {user.name}!</h2>
      <button type="button" className="btn" onClick={() => setUser(null)}>
        Log out
      </button>
    </>
  ) : (
    <button className="btn" type="button" onClick={() => setUser({ name: 'Daniel' })}>
      Log in
    </button>
  );
};

export default Header;
