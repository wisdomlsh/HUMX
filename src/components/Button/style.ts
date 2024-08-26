import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, cx, prefixCls }) => {
    const prefix = `${prefixCls}-btn`;

    const primary = `${prefixCls}-btn-primary`;
    const danger = `${prefixCls}-btn-danger`;
    const warning = `${prefixCls}-btn-warning`;
    const tertiary = `${prefixCls}-btn-tertiary`;
    const secondary = `${prefixCls}-btn-secondary`;

    const light = `${prefixCls}-btn-light`;
    const solid = `${prefixCls}-btn-solid`;
    const ghost = `${prefixCls}-btn-ghost`;
    const outline = `${prefixCls}-btn-outline`;
    const iconRight = `${prefixCls}-btn-iconRight`;
    const iconLeft = `${prefixCls}-btn-iconLeft`;
    const disabled = `${prefixCls}-btn-disabled`;
    const content = `${prefixCls}-btn-content`;

    return {
      button: cx(
        prefix,
        css`
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          outline: none;
          border: none;
          height: 32px;
          text-align: center;
          padding: 6px 12px;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          border-radius: var(--humx-btn-radius);
          transition: background-color var(--humx-transition_duration-none)
              var(--humx-transition_function-easeIn) var(--humx-transition_delay-none),
            border var(--humx-transition_duration-none) var(--humx-transition_function-easeIn)
              var(--humx-transition_delay-none);
          transform: scale(var(--humx-transform_scale-none));

          .${content} {
            display: inline-flex;
            align-items: center;
            gap: 4px;
          }
        `,
      ),

      primary: cx(
        primary,
        css`
          color: var(--humx-color-primary);
          font-weight: 600;
          &:hover {
            background-color: var(--humx-color-primary-hover);
          }
        `,
      ),
      tertiary: cx(
        tertiary,
        css`
          color: var(--humx-color-text-1);
        `,
      ),

      secondary: cx(
        secondary,
        css`
          color: var(--humx-color-secondary);
        `,
      ),
      danger: cx(
        danger,
        css`
          color: var(--humx-color-danger);
        `,
      ),
      warning: cx(
        warning,
        css`
          color: var(--humx-color-warning);
        `,
      ),
      light: cx(
        light,
        css`
          background-color: var(--humx-color-fill-0);

          &:hover {
            background-color: var(--humx-color-fill-1);
            border: 0 solid transparent;
          }

          :active {
            background-color: var(--humx-color-fill-2);
          }
        `,
      ),
      solid: cx(
        solid,
        css`
          background: var(--humx-color-primary);
          color: rgba(var(--humx-white), 1);
        `,
      ),

      ghost: cx(
        ghost,
        css`
          background-color: transparent;
          border: 0 solid transparent;

          &:hover {
            background-color: var(--humx-color-fill-0);
            border: 0 solid transparent;
          }
        `,
      ),
      outline: cx(
        outline,
        css`
          background-color: transparent;
          border: 1px solid var(--humx-color-border);

          &:hover {
            background-color: var(--humx-color-fill-0);
          }
        `,
      ),
      iconRight: cx(
        iconRight,
        css`
          order: 1;
        `,
      ),
      iconLeft: cx(
        iconLeft,
        css`
          order: 0;
        `,
      ),
      disabled: cx(
        disabled,
        css`
          cursor: not-allowed;
          color: var(--humx-color-disabled-text);

          &:active {
            background: var(--humx-color-fill-0);
          }

          &:hover {
            background: var(--humx-color-fill-0);
          }

          .content {
            pointer-events: none;
            opacity: 0.5;
          }
        `,
      ),
    };
  },
  {
    hashPriority: 'low',
  },
);
