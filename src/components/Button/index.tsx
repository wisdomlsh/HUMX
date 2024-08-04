import React, { memo } from 'react';
import { useStyles } from "./style";

export interface ButtonProps {
  /** 按钮类型 */
  type?: 'primary' | 'default' | 'link' | 'text' | 'dashed';
  children?: React.ReactNode;
  danger?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

/** 按钮组件 */
const Button: React.FC<ButtonProps> = (props) => {
  const { className, type, children, onClick, danger } = props
  const { styles } = useStyles()

  return (
    <button
      type='button'
      className={`${styles.button} ${className} ${type ? styles[type] : ''} ${danger ? styles.danger : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
