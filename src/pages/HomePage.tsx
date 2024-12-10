import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import HouseList from "../components/HouseList";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { housesService } from "../services/HouessService";

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

  return (
    <div className="home-page container">
      <div className="row">
        <HouseList houses={AppState.houses} />
      </div>
    </div>
  )
}

export default observer(HomePage)
