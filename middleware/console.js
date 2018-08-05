import { strong } from '@/lib/console'

export default function({ route }) {
  const text = route.name === 'index' ? 'ようこそ！' : `${route.name}!`

  console.clear()
  strong(text)
}
