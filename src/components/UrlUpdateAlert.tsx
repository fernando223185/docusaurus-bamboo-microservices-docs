import React from 'react';

export default function UrlUpdateAlert(): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('urlAlertDismissed') !== 'true';
    }
    return true;
  });

  const handleClose = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('urlAlertDismissed', 'true');
    }
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'sticky',
      top: '60px',
      zIndex: 100,
      marginBottom: '20px',
      backgroundColor: '#fff3cd',
      border: '1px solid #ffc107',
      borderRadius: '8px',
      padding: '12px 16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '20px' }}>⚠️</span>
          <div>
            <strong style={{ color: '#856404' }}>URL Update:</strong>
            <span style={{ color: '#856404', marginLeft: '8px' }}>
              The API base URL has been updated to <code style={{ 
                backgroundColor: '#f5f5f5', 
                padding: '2px 6px', 
                borderRadius: '4px',
                color: '#d63384'
              }}>https://bamboonetapi.ddns.net</code>
            </span>
          </div>
        </div>
        <button
          onClick={handleClose}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            color: '#856404',
            padding: '0 4px',
            lineHeight: '1',
            opacity: 0.7,
            transition: 'opacity 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
          title="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}
