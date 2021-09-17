import MediaCard from "./../../components/card/main-card/index";
import Main from "./../../components/header/main/index";
import './index.css'
import Aside from './../../components/sidebar/index'
import react, { createContext ,Component,useContext } from 'react';
import { UserContext } from './../../context/auth';



const NomePessoa = "luiz Inacio Lula Da Silva"
const data  = {
    "1":{"id":1,"src":"https://apod.nasa.gov/apod/image/2109/FireFlyMilkyWay_Komlev_960.jpg","title":"Contemplative Reptile","copyright":"Lizard","date": "2021-09-06","explanation": "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    "2":{"id":10,"src":"https://apod.nasa.gov/apod/image/2109/M31WideField_Ziegenbalg_960.jpg","title":"The Deep Sky Toward Andromeda","copyright":"Undefined","date":"2021-09-08","explanation":"What surrounds the Andromeda galaxy?  Out in space, Andromeda (M31) is closely surrounded by several small satellite galaxies, and further out it is part of the Local Group of Galaxies -- of which our Milky Way galaxy is also a member. On the sky, however, gas clouds local to our Milky Way appear to surround M31 -- not unlike how water clouds in Earth's atmosphere may appear to encompass our Moon.  The gas clouds toward Andromeda, however, are usually too faint to see.  Enter the featured 45-degree long image -- one of the deeper images yet taken of the broader Andromeda region. This image, sensitive to light specifically emitted by hydrogen gas, shows these faint and unfamiliar clouds in tremendous detail. But the image captures more.  At the image top is the Triangulum galaxy (M33), the third largest galaxy in the Local Group and the furthest object that can be seen with the unaided eye.  Below M33 is the bright Milky-Way star Mirach. The image is the digital accumulation of several long exposures taken from 2018 to 2021 from Pulsnitz, Germany."
    }
}
function loadObjectItems() {  
    return (
      <div>
        {Object.keys(data).map(time => (
          <div>
          <div className="card-feed">
            <MediaCard
              src={data[time].src}
              title={data[time].title}
              copyright={data[time].copyright}
              date={data[time].date}
              explanation={data[time].explanation}
            />
          </div>
        </div>
        ))}
      </div>
    )
  }

export default function Feed() {
  const {text} = useContext(UserContext);
  
  return (
    <div>
      <div>
        <Main NomePessoa={text} />
      </div>
      <div>
        <Aside/>
        {loadObjectItems()}
      </div>
    </div>
  );
}
