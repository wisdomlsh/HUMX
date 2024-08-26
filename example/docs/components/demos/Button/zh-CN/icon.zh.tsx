import { PlayCircleOutlined } from '@ant-design/icons';
import { Button } from 'humx';
import React from 'react';

const APP: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flexWrap: 'wrap' }}>
      <div>
        <strong>默认状态：</strong>
        <Button icon={<PlayCircleOutlined />} aria-label="开始" />
      </div>
      <div>
        <strong>禁用状态：</strong>
        <Button disabled icon={<PlayCircleOutlined />} aria-label="开始" />
      </div>
      <div>
        <strong>复合类型：</strong>
        <Button type="primary" icon={<PlayCircleOutlined />} aria-label="开始" />
        &nbsp;
        <Button type="secondary" icon={<PlayCircleOutlined />} aria-label="开始" />
        &nbsp;
        <Button type="warning" icon={<PlayCircleOutlined />} aria-label="开始" />
        &nbsp;
        <Button type="danger" icon={<PlayCircleOutlined />} aria-label="开始" />
        &nbsp;
      </div>
      <div>
        <strong>更改主题：</strong>
        <Button icon={<PlayCircleOutlined />} theme="solid" aria-label="开始" />
        &nbsp;
        <Button icon={<PlayCircleOutlined />} theme="light" aria-label="开始" />
        &nbsp;
        <Button icon={<PlayCircleOutlined />} theme="ghost" aria-label="开始" />
        &nbsp;
      </div>
      <div>
        <strong>更改图标位置：</strong>
        <Button icon={<PlayCircleOutlined />} theme="solid">
          收起
        </Button>
        &nbsp;
        <Button icon={<PlayCircleOutlined />} theme="solid" iconPosition="right">
          展开选项
        </Button>
        &nbsp;
      </div>
    </div>
  );
};

export default APP;
