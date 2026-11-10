import { hydrateRoot } from 'react-dom/client'

import { App } from './components/App'

async function main() {
  hydrateRoot(document.documentElement, <App />)
}

main()
