import { House } from "../models/House"

type HouseCardProps = {
  house: House
}

export default function HouseCard({ house }: HouseCardProps) {

  return (

    <div className="HouseCard card">
      <img src={house.imgUrl} alt={house.description} />
      <div className="card-body">
        {house.description} {house.price}
      </div>

    </div>
  )

}
