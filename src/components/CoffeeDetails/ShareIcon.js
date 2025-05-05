import React from 'react';

const ShareIcon = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'Check out this amazing coffee!',
          url: window.location.href,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported in your browser. Please copy the link manually.');
    }
  };

  return (
    <i
      className="bi bi-share-fill"
      onClick={handleShare}
      title="Share this coffee"
      style={{ fontSize: '1.5rem', cursor: 'pointer'}}
    ></i>
  );
};

export default ShareIcon;