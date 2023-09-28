import { definePreset } from '@unocss/core'

export const presetZiloen = definePreset(() => {

  return {
    name: 'unocss-preset-ziloen',
    // Customize your preset here
    rules: [
      // oveflow-anchor
      ['overflow-anchor-auto', { 'overflow-anchor': 'auto' }],
      ['overflow-anchor-none', { 'overflow-anchor': 'none' }],

      // flex
      ['flex-center', { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }],
      ['flex-between', { display: 'flex', 'justify-content': 'space-between' }],
      ['flex-align', { display: 'flex', 'align-items': 'center' }],
      ['flex-justify', { display: 'flex', 'justify-content': 'center' }],
      ['flex-stretch', { display: 'flex', 'align-items': 'stretch' }],

      // word-wrap
      ['word-wrap-normal', { 'word-wrap': 'normal' }],
      ['word-wrap-break', { 'word-wrap': 'break-word' }],
      ['word-wrap-anywhere', { 'word-wrap': 'anywhere' }],
    ],
  }
})
