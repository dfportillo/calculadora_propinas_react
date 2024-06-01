import { menuItems } from "./data/dt";
import MenuItem from "./components/MenuItem";
import useOrders from "./hooks/useOrders";
import OrderContents from "./components/OrderdContents";
import OrderTotals from "./components/OrderTotals";

function App() {

  const {order,
        addItem,
        removeItem} = useOrders()

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
          <div className=" space-y-3 mt-4">
            {menuItems.map((item) => 
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            )}
          </div>
        </div>
        <div>
        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents 
            order={order}
            removeItem={removeItem}
          />
          
        </div>
        <div className=" pt-3 px-5">
          <OrderTotals 
            
          />
        </div>
        </div>
      </main>    
    </>
  )
}

export default App
