
import type { ChangeEvent,Dispatch,SubmitEvent } from "react"
import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import  { categories } from "../data/categories"
import type { Activity } from "../types"
import type { ActuvityActions } from "../reducers/activity-reducer"

type FormPorps = {
    dispatch: Dispatch<ActuvityActions>
}

export default function Form({dispatch} : FormPorps) {
    
    const initialState : Activity = {
        id: uuidv4(),
        category:1,
        name:'',
        calories: 1
    }

    const [activity, setActivity] = useState<Activity>(initialState)

    const handlechange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category','calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id] : isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const {name, calories} = activity
        console.log(name.trim() !== '')
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e:SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type: "save-activity", payload: {newActivity: activity}})

       setActivity(
            {  ...initialState,
                id: uuidv4()
            })
    }

  return (
    <form 
    className="space-y-5 bg-white shadow p-10 rounded-lg"
    onSubmit={handleSubmit }
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Categoria:</label>
            <select
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                name="" id="category"
                value={activity.category}
                onChange={handlechange }
            >
                {categories.map(category=>(
                    <option 
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                    ))}

            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name">Actividad:</label>
            <input 
                type="text" 
                name="" 
                id="name" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. Comida, Jugo de naranja, Ensalada, Ejercicio, pesas, Bici"
                value={activity.name} 
                onChange={handlechange}
            />

        </div>
         <div className="grid grid-cols-1 gap-3">
            <label htmlFor="caliries">Calorigas:</label>
            <input 
                type="number" 
                name="" 
                id="caliries" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias. ej. 300 o 500"
                
                onChange={handlechange}
            />

        </div>

            <input 
                type="submit"
                className="bg-gray-800 hover:bg-green-950 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'} 
                disabled={!isValidActivity()}
            />
    </form>
  )
}
    // function uuidv4(): string {
    //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    //         const r = Math.random() * 16 | 0;
    //         const v = c === 'x' ? r : (r & 0x3 | 0x8);
    //         return v.toString(16);
    //     });
    // }


