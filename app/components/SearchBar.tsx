"use-client"
import  {useState,useEffect} from 'react'
import { Product } from '../all-products/types'
import { products } from '../all-products/data/products'

export default function SearchBar() {
 const [search, setSearch] = useState("");
 const [data, setData] = useState<Product[]>([]);
 const [dummy,setDummy] = useState<Product[]>(Object.values(products) as Product[]);
 useEffect(()=>{
    setData(dummy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase())));
 },[search])
 return (
    <div>
        <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <div>
            {data.map((item)=><div key={item.id}>{item.name}</div>)}
        </div>
    </div>
 )
}