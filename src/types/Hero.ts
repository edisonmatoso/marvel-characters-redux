type Hero = {
  id: number
  name: string
  description: string
  thumbnail: Thumbnail
}

type Thumbnail = {
  extension: string
  path: string
}

export default Hero
