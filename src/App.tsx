import { menuItems } from "./data/dt";
import MenuItem from "./components/MenuItem";

function App() {


  return (
    <>
      <header className=" py-5 bg-teal-400">
        <h1 className=" text-center text-4xl font-black">
          calculadora de propinas y consumo  
        </h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className=" text-4xl font-black">Menú</h2>
          <div className=" space-y-3 mt-8">
            {menuItems.map((item) => 
              <MenuItem 
                key={item.id}
                item={item}
              />
            )}
          </div>
        </div>
        <div>
          <h2>consumo</h2>
        </div>
      </main>    
    </>
  )
}

export default App
