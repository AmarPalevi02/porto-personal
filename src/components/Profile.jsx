import React from 'react'
import profil from '../assets/profile.jpg'

const Profile = () => {
    return (
        <div className="w-40 h-40 bg-white relative border-2 border-primary rounded-full">
            <img
                src={profil}
                alt="profil"
                className='object-contain rounded-full'
            />
        </div>
    )
}

export default Profile