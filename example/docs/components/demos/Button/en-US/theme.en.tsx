import { Button } from 'humx';
import React from 'react';

const APP: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <Button theme="light">Light Button</Button> &nbsp;
      <Button theme="solid">Solid Button</Button> &nbsp;
      <Button theme="ghost">Ghost Button</Button> &nbsp;
      <Button theme="outline">Outline Button</Button> &nbsp;
    </div>
  );
};

export default APP;
