import logo from './logo.svg';
import './App.css';
import gym from './image/img2.jpg'
import { useEffect, useState } from 'react';
import FlatList from 'flatlist-react';
import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';


function Oops() {

    const [entries, setentries] = useState([])
    const[response,setresponse]=useState([])
    const[item,setitem]=useState([])
    // useEffect(()=>{

    // },[entries])

    function publicApi() {
        axios.get("https://api.publicapis.org/entries").then((Response => {
            console.log("response", Response.data)
            setentries(Response.data.entries)
        })).catch(err => console.log(err))
        setresponse([])
        setitem([])
        
    }

    function catFact() {
        axios.get("https://catfact.ninja/fact").then((Response => {
            console.log("response", Response.data)
setresponse(Response.data)
        })).catch(err => console.log(err))
        setentries([])
        setitem([])
    }



    function allUniversity() {
        axios.get("http://universities.hipolabs.com/search?country=United+States").then((Response => {
            console.log("response", Response.data)
setitem(Response.data)
        })).catch(err => console.log(err))
        setentries([])
        setresponse([])


    }





    function Item3(item){
        console.log("item",item)
        return(
            <div >
            <span >{item.country}</span>
            {/* <span>{item.length}</span> */}
          </div>
        )
    }




    function Item2(item){
        console.log("item",item)
        return(
            <div >
            <span >{item.fact}</span>
            <span>{item.length}</span>
          </div>
        )
    }
    
       
        
      
    function Item(item){
        console.log("item",item)
        return(
            <div >
            <span >{item.Auth}</span>
            <span>{item.API}</span>
          </div>
        )
    }




    return (
        <div>
            <button className='nano' onClick={publicApi}>Public API</button>
            <button className='nano' onClick={catFact}>Cat Fact</button>
            <button className='nano' onClick={allUniversity}>All Universities</button>

            <div>
                
            </div>

            <FlatList
                list={entries}
                renderItem={Item}



            />
            <div>
                <FlatList
                    list={response}
                    renderItem={Item2}
                />
            </div>


            <div>
                <FlatList

                    list={item}
                renderItem={Item3}
                />
            </div>

        </div>




    );

}
export default Oops;