import { createGenerator } from 'unocss'
import { expect, test } from 'vitest'
import { presetZiloen } from '../src'

test('presetStarter', async () => {
  const uno = createGenerator({
    presets: [presetZiloen],
  })

  const presets = uno.config.presets
  expect(presets).toHaveLength(1)

  const { css } = await uno.generate('flex-center flex-align flex-justify')

  expect(css).toMatchInlineSnapshot(`
    "/* layer: default */
    .flex-center{display:flex;justify-content:center;align-items:center;}
    .flex-align{display:flex;align-items:center;}
    .flex-justify{display:flex;justify-content:center;}"
  `)

  const { css: css2 } = await uno.generate('z-max z-min')

  expect(css2).toMatchInlineSnapshot(`
    "/* layer: default */
    .z-max{z-index:2147483647;}
    .z-min{z-index:-2147483648;}"
  `)
})
