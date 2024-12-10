import { Link, useNavigate } from "react-router-dom"
import { House } from "../models/House"
import { observer } from "mobx-react"
import { AppState } from "../AppState"
import Pop from "../utils/Pop"
import { housesService } from "../services/HouessService"

type HouseCardProps = {
  house: House,
  showCreator?: Boolean
}

export default function HouseCard({ house, showCreator }: HouseCardProps) {

  const navigate = useNavigate()

  const Creator = () => (showCreator ? <div>
    <img src={house.creator?.picture} height={100} alt={house.creator?.name} />
    <p>{house.creator?.name}</p>
  </div> : <></>)


  async function deleteCar() {
    try {
      const yes = await Pop.confirm('Are you sure?')
      if (!yes) { return }
      await housesService.removeHouse(house.id)
      navigate('/account')
    }
    catch (error) {
      Pop.error(error as Error);
    }
  }

  async function editHouse() {
    AppState.house = house
  }
  const CreatorControls = observer(() => {
    if (AppState.account?.id != house.creatorId) {
      return <></>
    }

    return <div className='d-flex gap-3'>
      <button className='btn' title='Delete Car'><i className="mdi mdi-delete" onClick={deleteCar}></i></button>
      <button className='btn btn-outline-secondary' title='edit car' data-bs-toggle="modal" data-bs-target="#carModal" onClick={editHouse} ><i className="mdi mdi-pencil"></i></button>
    </div>

  })


  return (

    <div className="HouseCard card">

      <img src={house.imgUrl} alt={house.description} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="card-title">
            <Link to={"/houses/" + house.id}>
              {house.description}
            </Link>
          </div>
          <div className="price">
            ${house.price}
          </div>
        </div>
        <Creator />
        <CreatorControls />
      </div>
    </div>
  )

}
