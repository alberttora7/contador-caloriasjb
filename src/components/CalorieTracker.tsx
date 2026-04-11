import {useMemo} from 'react'
import type { Activity } from '../types'
import DisplayGraficos from './DisplayGraficos'

type CalorieTrackerProps = {
    activities:Activity[],
}
export default function CalorieTracker({activities} : CalorieTrackerProps) {

  

    //contadores
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1  ?  total + activity.calories : total, 0) , [activities])
  
    const caloriesBurned = useMemo(()=> activities.reduce((total, activity) => activity.category === 2  ? total + activity.calories : total, 0) , [activities])
  
    // const restarConsuBurn = caloriesConsumed - caloriesBurned
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned,[activities])
    return (
    <>
      <h2 className="text-4xl font-black text-white text-center"> Resumen de calorias</h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
            <DisplayGraficos
              calories={caloriesConsumed}
              text='Consumidas'
            />

           <DisplayGraficos
            calories={caloriesBurned}
            text='Quemadas'
           />
             <DisplayGraficos
            calories={netCalories}
            text='Diferencia'
           />
      </div>
       
    </>
  )
}
