import { renderToReadableStream } from '@vitejs/plugin-rsc/rsc/server'

import { App } from './components/App'

export async function render(nonce?: string) {
  return renderToReadableStream(<App />, {
    nonce,
  })
}
