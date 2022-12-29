import logo from './logo.svg';
import './App.css';
import gym from './image/img2.jpg'
import { useEffect, useState } from 'react';
import FlatList from 'flatlist-react';
import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';


function Home() {
    // const [] = useState()
    // const [] = useState(0)
    const [color, setcolor] = useState("red")
    const [colors, setcolors] = useState("green")
    const [entries, setentries] = useState([])
    useEffect(() => {
         axios.get("https://api.publicapis.org/entries").then((Response => {
           console.log('response',Response.data)
            setentries(Response.data.entries)
        })).catch(err => console.log(err))

        // fetch('https://api.publicapis.org/entries')
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log("data",data)
        // setentries(data.entries)}
        //     );
        setcolors('blue')
    }, [color])

    // const [show, setshow]=useState(false)
    // const click=color=>{ 
    //   setcolor(color)
    // }

    const people = [
        { firstName: 'Elson', lastName: 'Correia', info: 'a', age: 24 },
        { firstName: 'John', lastName: 'Doe', info: "a", age: 18 },
        { firstName: 'Jane', lastName: 'Doe', info: "a", age: 34 },


    ]

    function renderPerson(item) {
        console.log("item", item)
        return (
           <div>
                 <table>
                   <tr>
                        <th >API</th>
                        <th>AUTH</th>
                        <th>category</th>
                        <th>age</th>
                    </tr>
                    <tr>
                        <td >{item.API}</td>
                        <td>{item.Auth}</td>
                        <td>{item.category}</td>
                        <td>{item.age}</td>
                    </tr>

                </table>
            </div>
        )
    }

    return (
        <div className='sohit'>
            <div className='container'>

                {/* <h1 style={{color:color}}>my favorite color is color</h1> */}


                <form>
                    <div className='formgroup'>
                        <input type="text" name="" placeholder="Enter your Name"></input>
                    </div>

                    <div className='formgroup'>
                        <input type="text" Name="" placeholder="Enter your Father Name"></input>
                    </div>

                    <div className='formgroup'>
                        <input type="text" Name="" placeholder='Enter your age'></input>
                    </div>
                    <button className='solo'>Submit</button>
                    {/* <button onClick={()=>setcolor("yellow")}>change color</button> */}
                    {/* <button onClick={()=> setcolor ("green")}>green</button> */}
                    {/* <button onClick={()=>setColor("yellow")}>yellow</button> */}
                    {/* <button onClick={()=>setColor("pink")}>pink</button> */}
                </form>
                {/* {show==false&& */}
                <div className='nain3'>


                    <div className='nain' style={{ color: color }}>IT'S Always THE PERFECT TIME TO

                    </div>
                    <div className='nain2' style={{ color: colors }}> Transform your life
                    </div>





                </div>
                {/* } */}

                <button onClick={() => setcolor("yellow")}>click me </button>
                {/* <button onClick={() => setNums(num + 1)}>click me {nums}</button> */}

            </div>

            <div>
                <FlatList
                    list={entries}
                    renderItem={renderPerson}
                />
            </div>




        </div>

    );
}

export default Home;
