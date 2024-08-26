import { LoadingOutlined } from '@ant-design/icons';
import React, { memo } from 'react';
import { useStyles } from './style';

export interface ButtonProps {
  /** 按钮类型 */
  type?: 'primary' | 'secondary' | 'warning' | 'danger' | 'tertiary';
  theme?: 'light' | 'solid' | 'ghost' | 'outline';
  children?: React.ReactNode;
  danger?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
}

/** 按钮组件 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    loading,
    type = 'primary',
    children,
    icon,
    onClick,
    theme = 'light',
    iconPosition = 'left',
    ...reset
  } = props;
  const { styles } = useStyles();

  const iconRight = iconPosition === 'left' ? 'iconLeft' : 'iconRight';
  const disable = disabled ? styles['disabled'] : '';

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${styles['button']} ${className ?? ''} ${styles[type]} ${
        styles[theme]
      } ${disable}`}
      onClick={onClick}
      {...reset}
    >
      <span className="humx-btn-content">
        {loading && <span>{<LoadingOutlined />}</span>}
        {icon && <span className={styles[iconRight]}>{icon}</span>}
        <span>{children}</span>
      </span>
    </button>
  );
};

export default memo(Button);
