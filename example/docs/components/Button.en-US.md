---
category: Components
title: Button
description: 按钮用于开始一个即时操作。
humx: true
demo:
  cols: 1
group:
  title: 通用
  order: 1
---

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

In humx we provide 5 types of button.

Primary button: indicate the main action, one primary button at most in one section.

Default button: indicate a series of actions without priority.

Dashed button: used for adding action commonly.

Text button: used for the most secondary action.

Link button: used for external links.

And 4 other properties additionally.

danger: used for actions of risk, like deletion or authorization.

ghost: used in situations with complex background, home pages usually.

disabled: when actions are not available.

loading: add loading spinner in button, avoiding multiple submits too.

## Examples

<!-- prettier-ignore -->
<code src="./demos/Button/en-US/basic.en.tsx">Button Type</code>
<code src="./demos/Button/en-US/theme.en.tsx">Button Theme</code>
<code src="./demos/Button/en-US/icon.en.tsx">Button Icon</code>
<code src="./demos/Button/en-US/loading.en.tsx">Button Loading</code>

## API

通用属性参考：[通用属性](/docs/react/common-props)

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性            | 说明                                                                                                                                 | 类型                                                       | 默认值    | 版本 |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | --------- | ---- |
| autoInsertSpace | 我们默认提供两个汉字之间的空格，可以设置 `autoInsertSpace` 为 `false` 关闭                                                           | boolean                                                    | `true`    |      |
| block           | 将按钮宽度调整为其父宽度的选项                                                                                                       | boolean                                                    | false     |      |
| classNames      | 语义化结构 class                                                                                                                     | [Record<SemanticDOM, string>](#semantic-dom)               | -         |      |
| danger          | 设置危险按钮                                                                                                                         | boolean                                                    | false     |      |
| disabled        | 设置按钮失效状态                                                                                                                     | boolean                                                    | false     |      |
| ghost           | 幽灵属性，使按钮背景透明                                                                                                             | boolean                                                    | false     |      |
| href            | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致                                                                                | string                                                     | -         |      |
| htmlType        | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string                                                     | `button`  |      |
| icon            | 设置按钮的图标组件                                                                                                                   | ReactNode                                                  | -         |      |
| iconPosition    | 设置按钮图标组件的位置                                                                                                               | `start` \| `end`                                           | `start`   |      |
| loading         | 设置按钮载入状态                                                                                                                     | boolean \| { delay: number }                               | false     |      |
| shape           | 设置按钮形状                                                                                                                         | `default` \| `circle` \| `round`                           | `default` |      |
| size            | 设置按钮大小                                                                                                                         | `large` \| `middle` \| `small`                             | `middle`  |      |
| styles          | 语义化结构 style                                                                                                                     | [Record<SemanticDOM, CSSProperties>](#semantic-dom)        | -         |      |
| target          | 相当于 a 链接的 target 属性，href 存在时生效                                                                                         | string                                                     | -         |      |
| type            | 设置按钮类型                                                                                                                         | `primary` \| `dashed` \| `link` \| `text` \| `default`     | `default` |      |
| onClick         | 点击按钮时的回调                                                                                                                     | (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | -         |      |

支持原生 button 的其他所有属性。
