import { observer } from 'mobx-react-lite';
import HouseCard from '../components/HouseCard';
import { AppState } from '../AppState';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { housesService } from '../services/HouessService';
import Pop from '../utils/Pop';


function HousePage() {

  const { houseId } = useParams()
  const navigation = useNavigate()

  async function getHouse() {
    try {
      await housesService.getHouseById(houseId as string)
    } catch (error) {
      Pop.error("BAD House ID")
      navigation('/')
    }

  }

  useEffect(() => {
    getHouse()
  }, [houseId])


  return (

    <div className="HousePage container">
      <img className='img-fluid ' src={AppState.house?.imgUrl} alt={AppState.house?.description} />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="card-title">
            <p>{AppState.house?.bathrooms}</p>
            <p >{AppState.house?.bedrooms}</p>

          </div>
          <div className="price">
            ${AppState.house?.price}
          </div>
        </div>
      </div>
    </div>
  )

}
export default observer(HousePage)
