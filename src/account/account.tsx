import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './account.css'



interface ProfileInterface {
    id: number,
    name: string,
    image: string
}



function Profiles() {
    const list:ProfileInterface[]=[
    {id: 1, name: 'alexy', image :'https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png'},
    {id: 2, name: 'Julia', image : 'https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png'},
    {id: 3, name: 'maman', image: 'https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png'},
    {id: 4, name: 'papa', image : 'https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png'}]

    const [showAddProfile, setShowAddProfile] = useState(false)
    const [profiles, setProfiles] = useState<ProfileInterface[]>(() => {
        //get data from local storage
        const savedData: any = localStorage.getItem("profilesData");
        if (!savedData) {
            return []
        }

        const Data = JSON.parse(savedData);
        return Data.length > 0 ? Data : [];
    })
    //handle change on profiles
    useEffect(() => {
        saveToStorage(list)
    }, [list]);


    //save profiles to local storage
    const saveToStorage = (data: ProfileInterface[]) => {
        localStorage.setItem("profilesData", JSON.stringify(data));
    }


    //add new card to 'active' list 
    const addProfile = (profile: ProfileInterface) => {
        setProfiles(Profiles => [...profiles, profile])
    }

    //delete list on delete button click
    const handleDeleteProfile = (idProfile: number) => {
        setProfiles(
            profiles.filter(profile => profile.id !== idProfile)
        )
    }


    return (
        <main className='profiles'>
            <div className='content'>
                <ul>
                    {/* <li>
                        <span className='img'></span>
                        <span className='name'>irneiung</span>
                    </li> */}
                    {profiles.map((p) => (
                        <li key={p.id}>
                            <span className='img' style={{ backgroundImage: `url('${p.image}')` }}>
                                <button className='btn-delete' onClick={() => handleDeleteProfile(p.id)}>X</button>
                            </span>
                            <span className='name'>{p.name}</span>
                        </li>
                    ))}
                    {profiles.length < 5 && (
                        <li>
                            <button className='btn add' onClick={() => setShowAddProfile(true)}>
                                <i className="fa-regular fa-plus"></i>
                            </button>
                        </li>
                    )}

                </ul>
            </div>
        </main>

    )


}

export default Profiles