import { Button, chakra } from '@chakra-ui/react'

export const NavigationButton = chakra(Button, {
  baseStyle: {
    outline: 'none',
    display: 'flex',
    width: '150px',
    height: 40,
    marginTop: 20,
    border: '1px solid #000',
  },
})
