import { House } from "../models/House"
import HouseCard from "./HouseCard"

type props = {
  houses: House[]
}

export default function HouseList({ houses }: props) {

  return (

    <div className="HouseList">
      {houses.map(houses => {
        return (
          <div className="col-md-3" key={houses.id}>
            <HouseCard house={houses} />
          </div>
        )
      })}
    </div>
  )

}
