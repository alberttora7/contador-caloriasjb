import  { categories } from "../data/categories"

export default function Form() {
  return (
    <form action="" 
    className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Categoria:</label>
            <select
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                name="" id="category"
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
            <label htmlFor="activity">Actividad:</label>
            <input 
                type="text" 
                name="" 
                id="activity" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej. Comida, Jugo de naranja, Ensalada, Ejercicio, pesas, Bici"
            />

        </div>
         <div className="grid grid-cols-1 gap-3">
            <label htmlFor="caliries">Calorigas:</label>
            <input 
                type="text" 
                name="" 
                id="caliries" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias. ej. 300 o 500"
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
