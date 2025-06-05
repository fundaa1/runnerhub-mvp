import React from 'react';

const OfflinePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f0f0f0',
      color: '#333',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1>You are offline</h1>
      <p>We&apos;re sorry, but it seems you&apos;re not connected to the internet.</p>
      <p>Please check your connection and try again.</p>
      <p>Some content may be available if you have visited it before.</p>
    </div>
  );
};

export default OfflinePage;
