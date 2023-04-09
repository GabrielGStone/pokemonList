import { chakra, Text } from '@chakra-ui/react'

export const Title = chakra(Text, {
  baseStyle: {
    fontWeight: 600,
    textAlign: 'center',
    marginY: '40px',
    fontSize: 24,
  },
})
