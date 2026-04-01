import type { ChangeEvent } from "react"
import { useState } from "react"
import  { categories } from "../data/categories"
import type { Activity } from "../types"

export default function Form() {

    const [activity, setActivity] = useState<Activity>(
        {
            category:1,
            name:'',
            calories:0
        }
    )

    const handlechange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category','calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id] : isNumberField ? +e.target.value : e.target.value
        })
    }

  return (
    <form action="" 
    className="space-y-5 bg-white shadow p-10 rounded-lg"
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
                value={activity.calories}
                 onChange={handlechange}
            />

        </div>

        <input 
            type="submit"
            className="bg-gray-800 hover:bg-green-950 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value="Guardar caloria o actividad" 
         />
    </form>
  )
}
