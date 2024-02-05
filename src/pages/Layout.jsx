import React from 'react'
import BgParticel from '../components/BgParticel'
import Profile from '../components/Profile'
import Typing from '../components/Typing'
import SocialMedia from '../components/SocialMedia'

const Layout = () => {
    return (
        <div className="w-[100%] h-[100vh] relative">
            <BgParticel />
            <div className="w-full flex justify-center">
                <div className="w-full flex flex-col gap-3 items-center mx-auto my-auto top-20 p-2 rounded-md glass-background fixed z-50 md:w-2/4 md:flex-row xs:w-96">
                    <Profile />
                    <div className="flex items-center flex-col text-center w-80 mx-auto">
                        <Typing />
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout