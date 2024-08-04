import { createGlobalStyle } from 'antd-style';

export const GlobalStyle = createGlobalStyle`

 html {
    --humx-primary: #4d90fe; 
    --humx-danger: #ff4d4f; 
    --humx-color: #fff;
    --humx-color-900: #d9d9d9;
    --humx-color-black-300: #333; 
    --humx-color-link-hover: #69b1ff; 
    --humx-color-text-hover: rgba(0, 0, 0, 0.06); 
    --humx-radius: 6px; 
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${(p) => p.theme.colorBgLayout};
  }

  @font-face {
    font-family: AliPuHui;
    font-weight: normal;
    src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
    url('//at.alicdn.com/t/webfont_exesdog9toj.ttf') format('truetype');
    font-display: swap;
  }
  

  @font-face {
    font-family: AliPuHui;
    font-weight: bold;
    src: url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2') format('woff2'),
    url('https://at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
    font-display: swap;
  }

  /* 定义滚动槽的样式 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-right: 4px;
    background-color: transparent; // 定义滚动槽的背景色

    &-thumb {
      background-color: ${({ theme }) => theme.colorFill}; // 定义滚动块的背景色
      border-radius: 4px; // 定义滚动块的圆角半径
    }

    &-corner {
      display: none;
    }
  }
`;
