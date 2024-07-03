
import { useState } from 'react';
import axios from 'axios';
const Products = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState('');

    const addItem = async (item: string) => {
        setError('')
        setSelectedItems([...selectedItems, item]);
    };

    const removeItem = (index: number) => {
        const updatedItems = [...selectedItems];
        updatedItems.splice(index, 1);
        setSelectedItems(updatedItems);
    };
    const removeAll = () => {
        setSelectedItems([]);
        setTotal(0)
    };

    const checkout = async () => {
        try {
            if(selectedItems.length > 0 ){
                await axios.post(`${import.meta.env.VITE_API_URL}/checkout/add-item/`, { items: selectedItems });
                fetchTotal();
            }else{
                setError('Please add items into the cart')
            }
            
        } catch (error) {
            console.error("Error adding items:", error);
        }
    };

    const fetchTotal = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/checkout/total/`);
            setTotal(response.data.total);
        } catch (error) {
            console.error("Error fetching total:", error);
        }
    };
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Supermarket Checkout</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="container flex flex-wrap px-5 mx-auto ">
                    <div className="md:w-1/2 md:pr-12  md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    
                    <div className="flex flex-wrap  -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-2">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-sm ">Buy 3 at 130/-  <s>150</s> </p>
                                
                                <button className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm" onClick={() => addItem('A')}>Add A </button>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-2">
                            <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm ">Buy 2 at 45/- <s>60</s> </p>
                                <button className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm" onClick={() => addItem('B')}>Add B</button>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-2">
                            <div className="bg-gray-100 p-4 rounded-lg">
                               
                            <p className="text-sm ">Buy 1 at 20/- </p><small>(No Discount)</small>
                                <button className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm" onClick={() => addItem('C')}>Add C </button>
                        
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-2">
                            <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm ">Buy 1 at 15/- </p><small>(No Discount)</small>
                                <button className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm" onClick={() => addItem('D')}>Add D </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="title-font font-semibold text-gray-800 tracking-wider text-lg mb-3">Your Cart {selectedItems.length>0 && <button className="text-gray-400" onClick={removeAll}> | Clear All</button>}</h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                    
                    {selectedItems.map((item, index) => (
                        <li className="mx-2 mb-4" key={index}>
                       <p className="flex title-font font-medium" > {item} <button onClick={() => removeItem(index)}>
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cccccc"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button></p>
                        </li>
                    ))
                    }
                       </nav>
                       <p className="flex title-font font-medium text-red-600" >{error}</p>
                       
                    </div>
                </div>

            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5  mx-auto">
                <div className="align-center">
                        <h2 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">Total Price : {total} </h2>
                        <button className="w-1/3 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={checkout}>Calculate</button>
                    </div>
                </div>
                </section>
        </>
    )
}

export default Products