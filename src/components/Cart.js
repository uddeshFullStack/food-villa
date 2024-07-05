import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from '../utils/cartSlice'

const Cart = () => {

    const dispatch=useDispatch()
    const clearItems=()=>{
        dispatch(clearCart())
    }
    const removeItems=()=>{
        dispatch(removeItem())
    }

const items=useSelector(store=>store.cart.items)
  return (
<>
    <h1 className='font-mono font-bold text-3xl text-center'>Cart Items</h1>
    <button className='p-2 m-2 bg-green-50'onClick={()=>{clearItems()}}>Clear Cart</button>
        <div className='flex flex-wrap bg-pink-50'>
            {items.map(item => (
                <div key={item.name} className="w-[180px] p-2 m-2 shadow-md bg-pink-50">
                    
                    <h2 className="font-bold text-xl">{item.name}</h2>
                    <h3>{item.description}</h3>
                    <h4 className="font-bold text-xl">{item.price} $</h4>
                    <button className='p-2 m-2 bg-green-50' 
                    onClick={()=>{removeItems()}}
                    >
                    remove</button>
                </div> 
            ))}
    </div>
</>
  )
}

export default Cart