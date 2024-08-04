import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, cx, prefixCls }) => {

  const prefix = `${prefixCls}-btn`;
  const defaultData = `${prefixCls}-btn-default`;
  const primary = `${prefixCls}-btn-primary`;
  const link = `${prefixCls}-btn-link`;
  const text = `${prefixCls}-btn-text`;
  const dashed = `${prefixCls}-btn-dashed`;
  const danger = `${prefixCls}-danger`;

  return {
    button: cx(prefix, css`
      font-size: 14px;
      height: 32px;
      padding: 4px 8px;
      border-radius: var(--humx-radius);
      transition: all 0.3s;
      cursor: pointer;
      outline: none;
      background: none;
      border: none;
    `),
    default: cx(defaultData, css`
      background: var(--humx-color);
      color: var(--humx-color-black-300);
      border: 1px solid var(--humx-color-900);
  
      &:hover {
        color: var(--humx-primary);
        border-color: var(--humx-primary);
      }
    `),
    primary: cx(primary, css`
      color: var(--humx-color);
      background: var(--humx-primary);
      border: 1px solid var(--humx-primary);
    `),
    link: cx(link, css`
      color: var(--humx-primary);
      border: none;
      background: none;
  
      &:hover {
        color: var(--humx-color-link-hover);
      }
    `),
    text:cx(text,css`
      color: var(--humx-primary);
      border: none;
  
      &:hover {
        background: var(--humx-color-text-hover);
      }
    ` ) ,
    dashed: cx(dashed, css`
      color: var(--humx-color-black-300);
      background: var(--humx-color);
      border: 1px dashed var(--humx-color-900);
  
      &:hover {
        color: var(--humx-primary);
        border-color: var(--humx-primary);
      }
    `),
    danger: cx(danger, css`
      color: var(--humx-color);
      background: var(--humx-danger);
      border-color: var(--humx-danger);
    `)
  }
});