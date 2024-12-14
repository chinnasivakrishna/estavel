import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => navigate(path);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'login' or 'signup'

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">🔍</button>
          </div>
          <div className="auth-buttons">
            <button className="login" onClick={() => openModal('login')}>Login</button>
            <button className="signup" onClick={() => openModal('signup')}>Sign Up</button>
          </div>
        </nav>
      </header>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>✖</button>
            <h2>{modalType === 'login' ? 'Login' : 'Sign Up'}</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              {modalType === 'signup' && (
                <input type="text" placeholder="Username" required />
              )}
              <button type="submit">
                {modalType === 'login' ? 'Login' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
