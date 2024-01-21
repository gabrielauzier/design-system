import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$code',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return <Button>Hello World</Button>
}
