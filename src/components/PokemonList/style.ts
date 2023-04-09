import { Box, chakra } from '@chakra-ui/react'

export const GridCard = chakra(Box, {
  baseStyle: {
    width: '100%',
    paddingX: '3%',
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
  },
})
