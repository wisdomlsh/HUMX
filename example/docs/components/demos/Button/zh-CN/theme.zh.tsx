import { Button } from 'humx';
import React from 'react';

const APP: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <Button theme="light">浅色背景</Button> &nbsp;
      <Button theme="solid">深色背景</Button> &nbsp;
      <Button theme="ghost">透明背景</Button> &nbsp;
      <Button theme="outline">边框背景</Button> &nbsp;
    </div>
  );
};

export default APP;
