import logo from './logo.svg';
import './App.css';
import gym from './image/img2.jpg'
import FlatList from 'flatlist-react';
import { useState } from 'react';
function Page() {

    const [show, setshow] = useState()
    const [show1,setShow1]=useState()
    const [show2,setShow2]=useState()

    const country = [
        { countryName: "America" },
        { countryName: "England" },
        { countryName: "America" },
        { countryName: "England" },
        { countryName: "America" },
        { countryName: "England" },
        { countryName: "America" },
        { countryName: "England" },
    ]

    const game = [
        { gameName: "footbal" },
        { gameName: "footbal" },
        { gameName: "footbal" },
        { gameName: "footbal" },
        { gameName: "footbal" },
        { gameName: "footbal" },
    ]
    const dance=[
        {danceName:"bhangra"},
        {danceName:"bhangra"},
        {danceName:"bhangra"},
        {danceName:"bhangra"},
        {danceName:"bhangra"},
        {danceName:"bhangra"},
        {danceName:"bhangra"},
        {danceName:"bhangra"},
    ]


    function renderPerson(item) {
        console.log("item", item)
        return (
            <div>
                <table>

                    <tr>
                        <td>{item.countryName}</td>


                    </tr>
                </table>
            </div>
        )
    }

    function renderSon(item) {
        console.log("item", item)
        return (
            <div>
                <table>
                    <tr>
                        <td>{item.gameName}</td>
                    </tr>
                </table>
            </div>
        )
    }
    function renderSon1(item) {
        console.log("item", item)
        return (
            <div>
                <table>
                    <tr>
                        <td>{item.danceName}</td>
                    </tr>
                </table>
            </div>
        )
    }


    return (
        <div className='net'>
            <button className='page' onClick={() => setshow(true)}>countries</button>
            <button className='page' onClick={()=>setShow1(true)}>games</button>
            <button className='page' onClick={()=>setShow2(true)}>dance</button>


            {show == true &&
                <div>
                    <FlatList
                        list={country}
                        renderItem={renderPerson}
                    />
                </div>

            }
            {show1==true&&
            <div>
                <FlatList
                    list={game}
                    renderItem={renderSon}
                />
            </div>
            }
            {show2==true&&
            <div>
                <FlatList
                    list={dance}
                    renderItem={renderSon1}
                />
            </div>
            }
        </div>


    );
}

export default Page;
