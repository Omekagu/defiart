import {
  ContentCopyRounded,
  // FileUploadOutlined,
  // OpenWithOutlined,
} from '@mui/icons-material';
import React from 'react';
import ProfileContact from './ProfileContact';

const ProfileInfo = () => {
  const handleTextClick = () => {
    const textToCopy = '192939930 '; // Replace with the desired text to copy

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
      })
      .catch((error) => {
        console.log('Error copying text to clipboard:', error);
      });
  };
  return (
    <div className="profileUpload">
      <div className="profileUpload__container">
        {/* <OpenWithOutlined />
        <FileUploadOutlined /> */}
        <div>
          <img
            src="image/IMG_5527.jpeg"
            alt="background__photo"
            className="profileUpload__background--photo"
          />

          <img
            src="image/IMG_5527.jpeg"
            alt="profile__hoto"
            className="profileUpload__profile--photo"
          />
        </div>
        <div className="profileUpload__userinfo">
          <h5 className="profileUpload__username">Omekagu Chukwuebuka j.</h5>
          <br />
          <h5 className="profileUpload__code" onClick={handleTextClick}>
            192939930 <ContentCopyRounded />
          </h5>
        </div>
      </div>
      <div className="profileUpload__contact">
        <ProfileContact />
      </div>
    </div>
  );
};

export default ProfileInfo;
