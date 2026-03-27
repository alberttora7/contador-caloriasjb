import  { categories } from "../data/categories"

export default function Form() {
  return (
    <form action="" 
    className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Categotegoria:</label>
            <select
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                name="" id="category"
            >
                {categories.map(category=>(
                    <option value=""
                        key={category.id}
                    >
                        {category.name}
                    </option>
                    ))}

            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Actividad:</label>
            <input 
            type="text" 
            name="" 
            id="activity" 
            className="border border-slate-300 p-2 rounded-lg"
            />

        </div>
    </form>
  )
}
