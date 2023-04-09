import { Card, Image, Text, chakra } from '@chakra-ui/react'

export const PokemonCardContainer = chakra(Card, {
  baseStyle: {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    cursor: 'pointer',
    border: '1px solid #000',
  },
})

export const PokemonText = chakra(Text, {
  baseStyle: {
    fontSize: 24,
  },
})

export const FavoriteImage = chakra(Image, {
  baseStyle: { position: 'absolute', width: '30px' },
})
