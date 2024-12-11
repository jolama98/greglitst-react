import { House } from "../models/House"
import HouseCard from "./HouseCard"

type displays = "grid" | "masonry"
type props = {
  houses: House[],
  display?: displays
}

export default function HouseList({ houses, display = 'grid' }: props) {
  if (display == 'masonry') {
    return
  }
  return (<div className="row">
    {
      houses.map(houses => {
        return (
          <div className="col-md-4" key={houses.id}>
            <HouseCard house={houses} />
          </div>
        )
      })
    }
  </div >
  )

}
