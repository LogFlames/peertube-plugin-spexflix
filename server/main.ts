import type { RegisterServerOptions } from '@peertube/peertube-types'

async function register ({ peertubeHelpers }: RegisterServerOptions): Promise<void> {
}

async function unregister (): Promise<void> {}

module.exports = {
  register,
  unregister
}
