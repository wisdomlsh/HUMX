import { Button } from 'humx';
import React from 'react';

const APP: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
      <Button type="primary" loading={true}>
        Primary Button
      </Button>
    </div>
  );
};
export default APP;
