import type { RegisterClientOptions } from '@peertube/peertube-types/client'
/*
NB: if you need some types like `video`, `playlist`, ..., you can import them like that:
import type { Video } from '@peertube/peertube-types'
*/

async function register ({ registerHook, peertubeHelpers }: RegisterClientOptions): Promise<void> {
}

export {
  register
}
