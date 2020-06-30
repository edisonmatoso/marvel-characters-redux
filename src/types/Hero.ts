type Hero = {
  id: number
  name: string
  thumbnail: Thumbnail
  series: Serie
}

type Thumbnail = {
  extension: string
  path: string
}

type Serie = {
  items: Item[]
}

type Item = {
  name: string
  resourceURI: string
}

export default Hero
