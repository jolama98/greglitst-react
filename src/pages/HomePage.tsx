import { observer } from "mobx-react";
import { useEffect } from "react";
import HouseList from "../components/HouseList";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { housesService } from "../services/HouessService";
import { House } from "../models/House";
import HouesForm from "../components/HouesForm";

function HomePage() {

  async function getHouses() {
    try {
      await housesService.getHouses();
    }
    catch (error) {
      Pop.error(error as Error);
    }
  }

  useEffect(() => {
    getHouses()
  }, [])

  function createHouse() {
    AppState.house = House.create()
  }


  return (
    <div className="home-page container">
      <HouesForm />
      {/* <button className='btn btn-lg btn-warning my-2' data-bs-toggle="modal" data-bs-target="#houseModal" onClick={createHouse}>Create House 🏚️</button> */}

      <div className="row">
        <HouseList houses={AppState.houses} />
      </div>
    </div>
  )
}

export default observer(HomePage)
