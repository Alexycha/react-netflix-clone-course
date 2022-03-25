import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './account.css'



interface ProfileInterface {
    id: number,
    name: string,
    image: string
}



function Profiles() {
    const list:ProfileInterface[]=[
    {id: 1, name: 'Alexy', image :'https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png'},
    {id: 2, name: 'Julia', image : 'https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png'},
    {id: 3, name: 'Maman', image: 'https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png'},
    {id: 4, name: 'Papa', image : 'https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png'}]

    const [profiles] = useState<ProfileInterface[]>(() => {
        const savedData: any = localStorage.getItem("profilesData");
        if (!savedData) {
            return []
        }

        const Data = JSON.parse(savedData);
        return Data.length > 0 ? Data : [];
    })
    useEffect(() => {
        saveToStorage(list)
    }, [list]);


    const saveToStorage = (data: ProfileInterface[]) => {
        localStorage.setItem("profilesData", JSON.stringify(data));
    }

    return (
        <main className='profiles'>
            <div className='content'>
                <ul>
                    {profiles.map((p) => (
                        <li key={p.id}><button>
                            <Link to="../home">
                            <span className='img' style={{ backgroundImage: `url('${p.image}')` }}>
                            </span>
                            <span className='name'>{p.name}</span>
                            </Link>
 </button>
                        </li>
                    ))}

                </ul>
            </div>
        </main>

    )


}

export default Profiles