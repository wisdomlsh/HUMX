
import React from 'react';
import { Button } from 'HUMX';

const APP: React.FC = () => {

  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <Button type="default">Default Button</Button> &nbsp;
      <Button type="primary">Primary Button</Button> &nbsp;
      <Button type="text">Text Button</Button> &nbsp;
      <Button type="dashed">Dashed Button</Button> &nbsp;
      <Button type="link">Link Button</Button>
    </div>
  );
}
export default APP
