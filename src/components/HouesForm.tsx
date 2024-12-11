import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { House } from '../models/House';
import { AppState } from '../AppState';

function HouseFrom() {
  const [editable, setEditable] = useState<House>
    (AppState.house || House.create())

  async function handleSubmit() {
    event?.preventDefault()



    const form = event?.target as HTMLFormElement

    const house = {
      price: form.price.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value
    }
    console.log(house)
    form.reset()
  }

  function handleChange({ target }: { target: { name: string, value: string } }) {
    console.log(target)
    const { name, value } = target
    setEditable({ ...editable, [name]: value })
    console.log(editable)
  }

  return (

    <form className="HouseFrom my-5" onSubmit={handleSubmit} key={editable.id}>
      {editable.levels} - {editable.price}
      <input className='form-control' type="text" name='levels' placeholder='House levels' defaultValue={editable.levels} onChange={handleChange} />

      <div className="mb-3">
        <label htmlFor="year" className="form-label">year</label>
        <input required type="number" defaultValue={editable.year} className="form-control" id="year" placeholder="year..." name="year" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">img</label>
        <input required type="text" defaultValue={editable.imgUrl} className="form-control" id="img" placeholder="img..." name="imgUrl" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">price</label>
        <input required type="number" defaultValue={editable.price} className="form-control" id="price" placeholder="price..." name="price" onChange={handleChange} />
      </div>

      <button className='btn btn-outline-secondary my-3' type='submit'>submit</button>
    </form>

  )

}
export default observer(HouseFrom)
