import {
  createFromReadableStream,
  getClientEntryUrl,
} from '@vitejs/plugin-rsc/ssr'
import { ReactNode, use } from 'react'
import { renderToReadableStream } from 'react-dom/server.edge'

export async function ssr(
  rscStream: ReadableStream<Uint8Array>,
  { nonce }: { nonce?: string },
) {
  let payload: Promise<ReactNode> | undefined

  function SsrRoot() {
    payload ??= createFromReadableStream<ReactNode>(rscStream)
    return use(payload)
  }

  const bootstrapScriptContent = `import(${JSON.stringify(getClientEntryUrl())})`

  return await renderToReadableStream(<SsrRoot />, {
    bootstrapScriptContent,
    nonce,
  })
}
