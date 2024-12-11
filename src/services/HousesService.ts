import { AppState } from "../AppState";
import { House } from "../models/House";
import { api } from "./AxiosService";

class HousesService {
  async editHouse(formData: House, houseId: string) {
    const res = await api.put(`api/houses/${houseId}`, formData)
    console.log('[edit house]', res.data);
    let oldCarIndex = AppState.houses.findIndex(c => c.id == houseId)
    AppState.houses.splice(oldCarIndex, 1, new House(res.data))
  }

  async removeHouse(houseId: string) {
    const res = await api.delete('api/houses/' + houseId)
    console.log('[removing house]', res.data);
    AppState.houses = AppState.houses.filter(house => house.id != houseId)
  }

  async createHouse(formData: House) {
    const res = await api.post('api/houses', formData)
    console.log('[create house]', res.data);
    let actualHouse = new House(res.data)
    AppState.houses.push(actualHouse)
  }


  async getHouses() {
    if (AppState.houses.length) { return }
    const response = await api.get('api/houses')
    console.log('[get houses]', response.data)
    AppState.houses = response.data.map((house: House) => new House(house))
  }

  async getHouseById(houseId: string) {
    if (AppState.house?.id == houseId) { return }
    AppState.house = null
    const response = await api.get('api/houses/' + houseId)
    console.log('[get house by id]', response.data)
    AppState.house = new House(response.data)
  }
}
export const housesService = new HousesService()
