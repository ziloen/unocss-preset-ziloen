import { definePreset } from '@unocss/core'


export const presetZiloen = definePreset(() => {

  return {
    name: 'unocss-preset-ziloen',
    rules: [
      // oveflow-anchor
      ['overflow-anchor-auto', { 'overflow-anchor': 'auto' }],
      ['overflow-anchor-none', { 'overflow-anchor': 'none' }],
      ['of-anchor-auto', { 'overflow-anchor': 'auto' }],
      ['of-anchor-none', { 'overflow-anchor': 'none' }],

      // flex
      ['flex-center', { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }],
      ['flex-align', { display: 'flex', 'align-items': 'center' }],
      ['flex-justify', { display: 'flex', 'justify-content': 'center' }],
      ['flex-between', { display: 'flex', 'justify-content': 'space-between' }],
      ['flex-around', { display: 'flex', 'justify-content': 'space-around' }],
      ['flex-evenly', { display: 'flex', 'justify-content': 'space-evenly' }],
      ['flex-stretch', { display: 'flex', 'align-items': 'stretch' }],
      ['inline-flex-center', { display: 'inline-flex', 'justify-content': 'center', 'align-items': 'center' }],
      ['inline-flex-align', { display: 'inline-flex', 'align-items': 'center' }],
      ['inline-flex-justify', { display: 'inline-flex', 'justify-content': 'center' }],

      // grid
      ['grid-center', { display: 'grid', 'place-content': 'center' }],
      ['inline-grid-center', { display: 'inline-grid', 'place-content': 'center' }],

      // word-wrap / overflow-wrap
      ['word-wrap-normal', { 'word-wrap': 'normal', 'overflow-wrap': 'nomal' }],
      ['word-wrap-break', { 'word-wrap': 'break-word', 'overflow-wrap': 'break-word' }],
      ['word-wrap-anywhere', { 'word-wrap': 'anywhere', 'overflow-wrap': 'anywhere' }],

      // z-index
      ['z-max', { 'z-index': '2147483647' }],
      ['z-min', { 'z-index': '-2147483647' }],

      // scrollbar
      ['scrollbar-none', {
        'scrollbar-width': 'none',
        '-ms-overflow-style': 'none',
        // TODO: fix this
        // '&::-webkit-scrollbar': '{display:none;}'
      }],

      // size-\d

      // webkit-scrollbar-[4px]
      // webkit-scrollbar-[red]
      // webkit-scrollbar-m-[4px]
    ],
  }
})
