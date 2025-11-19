import fs from 'node:fs'
import path from 'node:path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'ost.mp3')
  const data = await fs.promises.readFile(filePath)

  return new Response(data, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}