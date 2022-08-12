import { useCallback, useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { getBanner } from "../Data";
import ReactLoading from "react-loading";
import { bounce, tada } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { useNavigate } from "react-router-dom";

const styles = {
  tada: {
    animation: "x 3s",
    animationName: Radium.keyframes(tada, "tada"),
  },
};

var Slider = (props) => {
  let navigate = useNavigate();
  var [images, setImages] = useState([]);
  var [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBanner(setImages, setIsLoading);
  }, []);

  return (
    <>
      {isLoading === false ? (
        <div className="flex justify-center relative">
          <div className="absolute bottom-1/2 z-10">
            <StyleRoot style={styles.tada}>
              <div>
                <p
                  className="text-4xl text-white uppercase"
                  style={{ textShadow: "2px 2px 5px black" }}
                >
                  Hàng mới về
                </p>
                <button
                  onClick={() =>
                    navigate("/Categories", { state: { name: "Nam", id: 1 } })
                  }
                  style={{ textShadow: "2px 2px 5px black" }}
                  className="border border-4 text-white w-full py-3 shadow-xl mt-3 text-xl"
                >
                  Xem ngay
                </button>
              </div>
            </StyleRoot>
          </div>
          <SimpleImageSlider
            width={"100%"}
            height={870}
            images={images}
            showBullets={true}
            // showNavs={true}
            autoPlay={true}
            loop
            style={{
              borderRadius: 10,
              marginBottom: 20,
            }}
          />
        </div>
      ) : (
        <div className="flex flex-1 justify-center h-screen items-center">
          <ReactLoading type="balls" color="black" height={"5%"} width={"5%"} />
        </div>
      )}
    </>
  );
};

export default Slider;
