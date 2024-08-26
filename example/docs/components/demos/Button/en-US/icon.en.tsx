import { PlayCircleOutlined } from '@ant-design/icons';
import { Button } from 'humx';
import React from 'react';

const APP: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flexWrap: 'wrap' }}>
      <div>
        <strong>默认状态：</strong>
        <Button icon={<PlayCircleOutlined />} aria-label="start" />
      </div>
      <div>
        <strong>禁用状态：</strong>
        <Button disabled icon={<PlayCircleOutlined />} aria-label="start" />
      </div>
      <div>
        <strong>复合类型：</strong>
        <Button type="primary" icon={<PlayCircleOutlined />} aria-label="start" />
        &nbsp;
        <Button type="secondary" icon={<PlayCircleOutlined />} aria-label="start" />
        &nbsp;
        <Button type="warning" icon={<PlayCircleOutlined />} aria-label="start" />
        &nbsp;
        <Button type="danger" icon={<PlayCircleOutlined />} aria-label="start" />
        &nbsp;
      </div>
      <div>
        <strong>更改主题：</strong>
        <Button icon={<PlayCircleOutlined />} theme="solid" aria-label="start" />
        &nbsp;
        <Button icon={<PlayCircleOutlined />} theme="light" aria-label="start" />
        &nbsp;
        <Button icon={<PlayCircleOutlined />} theme="ghost" aria-label="start" />
        &nbsp;
      </div>
      <div>
        <strong>更改图标位置：</strong>
        <Button icon={<PlayCircleOutlined />} theme="solid">
          start
        </Button>
        &nbsp;
        <Button icon={<PlayCircleOutlined />} theme="solid" iconPosition="right">
          start
        </Button>
        &nbsp;
      </div>
    </div>
  );
};

export default APP;
