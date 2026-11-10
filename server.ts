import { Readable } from 'node:stream'
import type { ReadableStream } from 'node:stream/web'

import { render } from './dist/rsc/index.js'
import { ssr } from './dist/ssr/index.js'

async function run() {
  const nonce = 'test-nonce'
  const rscStream: ReadableStream = await render(nonce)
  const htmlStream: ReadableStream = await ssr(rscStream, { nonce })

  Readable.fromWeb(htmlStream).pipe(process.stdout)
}

run().catch(console.error)
