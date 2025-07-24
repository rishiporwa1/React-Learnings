// import { useState } from 'react'

function BuyFace({face = "https://images.pexels.com/photos/33034933/pexels-photo-33034933.jpeg" , name = "No Name", price ="Not Decided" }){
    // const [play, setPlay] = useState(false)
    return(
        <>
            <button>
                <div className="flex items-center justify-center">
                    <img src={face} alt="face" className="w-16 h-16 rounded-full" />
                </div>
                <div className="text-center mt-2">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">{price}</p>
                </div>
            </button>
        </>
    )
}
export default BuyFace