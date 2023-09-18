'use client'
import SelectField from '@/components/SelectField'
import {useParams} from 'next/navigation'
import {Stack, Button} from '@mui/material'

interface Obj {
  items: []
  label: string
  minWidth: number
}

export default function Product(){
  // const {id} = useParams()

  const selectFieldData = [
    {items: [
      {value: '#fff', text: 'White'}, 
      {value: '#000', text: 'Black'},
    ], label: 'Color', minWidth: 120},
    {items: [
      {value: 'mobile', text: 'Mobile app'}, 
      {value: 'remote', text: 'Remote control'},
    ], label: 'Control', minWidth: 120},
    {items: [
      {value: '1 unit', text: '1 unit 50$'}, 
      {value: '2 unit', text: '2 unit 100$'}, 
      {value: '3 unit', text: '3 unit 150$'}, 
      {value: '4 unit', text: '4 unit 200$'}, 
    ], label: 'Quantity', minWidth: 120},
  ]

  return(
    <>
      <div className="flex justify-between h-96">
        <div className="relative w-6/12">
          <img src="https://cdn-60c13ad2c1ac185aa47dad63.closte.com/wp-content/uploads/2021/09/Inoleds-Curve-Table-Lamp-6.jpg" alt="" className="absolute object-scale-down w-full h-full" />
        </div>
        <div className="w-6/12">
          <h1 className=''>Product name</h1>
          <p>
            <span className="mr-3">4500</span>
            <span className="line-through">3500</span>
          </p>

          {selectFieldData.map((obj, idx) => {
            const {items, label, minWidth} = obj
            return <SelectField key={idx} items={items} label={label} minWidth={minWidth} />
          })}

          <Stack spacing={2} direction="row">
            <Button variant="contained">Contained</Button>
          </Stack>
        </div>
      </div>
    </>
  )
}