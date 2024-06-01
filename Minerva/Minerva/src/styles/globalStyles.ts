import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  body, html {
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    width: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
    vertical-align: baseline;
    color: ${({ theme }) => theme.colors['gray-800']};
    background-color: ${({ theme }) => theme.colors['gray-50']};
  }

  a {
    text-decoration: none;
    text-transform: none;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  button, input,
  select, textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    vertical-align: middle;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  audio, canvas, video {
    display: inline-block;
    display: inline;
    zoom: 1;
    max-width: 100%;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
  }

  figure {
    margin: 0;
  }

  form {
    margin: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  legend {
    border: 0;
    padding: 0;
    white-space: normal;
    margin-left: -7px;
  }

  button,
  input {
    line-height: normal;
  }

  button,
  select {
    text-transform: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  input[type = search] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  button[disabled],
  html input[disabled] {
    cursor: default ;
  }

  button,
  input[type = "reset"],
  input[type = "submit"],
  html input[type = "button"] {
    -webkit-appearance: button;
    cursor: pointer;
    overflow: visible;
  }

  input[type = "search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input[type = "search"]::-webkit-search-cancel-button,
  input[type = "search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  input[type = search]::-webkit-search-cancel-button,
  input[type = search]::-webkit-search-decoration,
  input[type = search]::-webkit-search-results-button,
  input[type = search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`
