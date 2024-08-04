---
category: Components
title: Button
# toc: content # 在页面右侧展示锚点链接
description: 按钮用于开始一个即时操作。
humx: true
demo:
  cols: 2
group:
  title: 通用
  order: 1
atomId: ApiHeader
---

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 HUMX 中提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加操作。
- 文本按钮：用于最次级的行动点。
- 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。
- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 代码演示

<!-- prettier-ignore -->
<code src="./demos/Button/basic.tsx">按钮类型</code>
<code src="./demos/Button/danger.tsx">按钮图标</code>

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
