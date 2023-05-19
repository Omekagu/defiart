import {
  Call,
  ConnectWithoutContactOutlined,
  Edit,
  Email,
} from '@mui/icons-material';
import React from 'react';
import Switch from './Switch';

const ProfileContact = () => {
  return (
    <div className="profileContact">
      <div className="profileContact__mail">
        <Email /> mikecheq5@gmail.com
        <div className="profileContact__editmail">
          <Edit />
        </div>
      </div>
      <div className="profileContact__linked">
        <p>Linked</p>
      </div>
      <div className="profileContact__call">
        <Call />
        <p>(+234) 80-2019-0530</p>
      </div>
      <div className="profileContact__onMode">
        <ConnectWithoutContactOutlined />
        <p>Yzkvng.com</p>
        <div className="profileContact__switch">
          <Switch />
        </div>{' '}
      </div>
    </div>
  );
};

export default ProfileContact;
