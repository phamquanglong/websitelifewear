import { useCallback, useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { getBanner } from "../Data";
import ReactLoading from 'react-loading'

var Slider = (props) => {
    var [images, setImages] = useState([])
    var [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getBanner(setImages, setIsLoading)
    }, [])

    return <>
        {isLoading === false ? <div className="flex justify-center relative">
            <SimpleImageSlider
                width={'80%'}
                height={800}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                loop
                style={{
                    borderRadius: 10,
                    marginBottom: 20
                }}
            />
        </div> : <div className="flex flex-1 justify-center h-screen items-center">
            <ReactLoading type='balls' color='black' height={'5%'} width={'5%'}/>
        </div>}
    </>
}

export default Slider