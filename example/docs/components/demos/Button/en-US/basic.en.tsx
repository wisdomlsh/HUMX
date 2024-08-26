import { Button } from 'humx';
import React from 'react';

const APP: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <Button type="primary">Primary Button</Button>
      <Button type="secondary">Secondary Button</Button>
      <Button type="tertiary">Tertiary Button</Button>
      <Button type="warning">Warning Button</Button>
      <Button type="danger">Danger Button</Button>
    </div>
  );
};
export default APP;
