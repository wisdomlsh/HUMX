import React from 'react';
import { Button } from 'HUMX';

const APP: React.FC = () => {

  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <Button type="default" danger>Default Button</Button> &nbsp;
      <Button type="primary" danger>Primary Button</Button> &nbsp;
      <Button type="text" danger>Text Button</Button> &nbsp;
      <Button type="dashed" danger>Dashed Button</Button> &nbsp;
      <Button type="link" danger>Link Button</Button>
    </div>
  );
}

export default APP
