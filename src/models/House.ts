type Profile = { name: string, picture: string, id: string }
export class House {
  id: string
  bedrooms: number
  bathrooms: number
  levels: number
  imgUrl: string
  year: number
  price: number
  description: string
  creatorId?: string
  creator?: Profile
  createdAt?: Date
  constructor(data: House) {
    this.id = data.id
    this.createdAt = data.createdAt || new Date()
    this.description = data.description || ''
    this.imgUrl = data.imgUrl || ''
    this.price = data.price || 0
    this.year = data.year || 0
    this.creatorId = data.creatorId || ''
    this.creator = data.creator
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.levels = data.levels
  }
  static create() {
    return new House({ id: '', description: '', imgUrl: '', price: 0, levels: 0, year: 0, bedrooms: 0, bathrooms: 0 })
  }
}
