import { observer } from 'mobx-react-lite';
import { AppState } from '../AppState';
import { useEffect } from 'react';
import HouesForm from './HouseForm';

function HouseModal() {
  function clearHoses() {
    console.log('did it fire?')
    AppState.house = null
  }

  useEffect(() => {
    const modal = document.getElementById('houseModal') as HTMLElement
    modal.addEventListener('hidden.bs.modal', clearHoses)


    return () => {
      modal.removeEventListener('hidden.bs.modal', clearHoses
      )
    }
  }, [])


  return (


    <div className="modal fade" id="houseModal" tabIndex={-1} aria-labelledby="houseModalLabel" >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit House</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {AppState.house ? <HouesForm /> : null}
          </div>
        </div>
      </div>
    </div>

  )

}
export default observer(HouseModal)
