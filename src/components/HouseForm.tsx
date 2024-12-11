import { observer } from 'mobx-react-lite';
import { House } from '../models/House';
import { AppState } from '../AppState';
import { BindEditable } from '../utils/FormHandler';
import { logger } from '../utils/Logger';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';

function HouseFrom() {
  const editable = { ...AppState.house || House.create() }
  const handleChange = BindEditable(editable)

  // const [editable, setEditable] = useState<House>
  // (AppState.house || House.create())

  async function handleSubmit() {
    try {
      event?.preventDefault()
      logger.log({ editable })
      editable.id
        ? await housesService.editHouse(editable, editable.id)
        : await housesService.createHouse(editable)
    } catch (error) {
      Pop.error(error as Error);
    }
  }
  //   const form = event?.target as HTMLFormElement

  //   const house = {
  //     price: form.price.value,
  //     year: form.year.value,
  //     imgUrl: form.imgUrl.value,
  //     bathrooms: form.bathrooms.value,
  //     bedrooms: form.bedrooms.value,
  //     description: form.description.value
  //   }
  //   console.log(house)
  //   form.reset()
  // }



  return (

    <form className="HouseFrom my-5" onSubmit={handleSubmit} key={editable.id}>
      <label htmlFor="levels" className="form-label">levels</label>
      <input className='form-control' type="number" placeholder='House levels' defaultValue={editable.levels} id="levels" name='levels' onChange={handleChange} />
      <div className="mb-3">
        <label htmlFor="year" className="form-label">year</label>
        <input required type="number" defaultValue={editable.year} className="form-control" id="year" placeholder="year..." name="year" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="bathrooms" className="form-label">bathrooms</label>
        <input required type="number" defaultValue={editable.bathrooms} className="form-control" id="bathrooms" placeholder="bathrooms..." name="bathrooms" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="bedrooms" className="form-label">bedrooms</label>
        <input required type="number" defaultValue={editable.bedrooms} className="form-control" id="bedrooms" placeholder="bedrooms..." name="bedrooms" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">img</label>
        <input required type="text" defaultValue={editable.imgUrl} className="form-control" id="img" placeholder="img..." name="imgUrl" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">price</label>
        <input required type="number" defaultValue={editable.price} className="form-control" id="price" placeholder="price..." name="price" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">description</label>
        <textarea name="description" className="form-control" id="description" rows={3} defaultValue={editable.description}></textarea>
      </div>

      <button className='btn btn-outline-secondary my-3' type='submit'>submit</button>
    </form>

  )

}
export default observer(HouseFrom)
