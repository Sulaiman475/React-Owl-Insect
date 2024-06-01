import {
    createContext,
    useContext,
    useState
} from "react";
import {
    insectsData
} from "../data/data.js";

const MyContext = createContext();

export default function MyState({
    children
}) {
    const [insects, setInsects] = useState([]);
    const [currentInsectPosition, setCurrentInsectPosition] = useState(null);

    const addInsect = (type) => {
        let src = insectsData.find(singleInsect => singleInsect.name === type)
        setInsects([...insects, {
            type,
            id: Date.now(),
            imgSrc: src.imgSrc
        }]);
    };

    const handleInsectEat = (id) => {
        setInsects(insects.filter((insect) => insect.id !== id));
    };

    const handleDrag = (x, y) => {
        setCurrentInsectPosition({
            x,
            y
        });
    };

    const moveEye = (eye, insectPosition) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;
        const angle = Math.atan2(
            insectPosition.y - eyeY,
            insectPosition.x - eyeX
        );
        const distance = Math.min(
            15,
            Math.sqrt(
                (insectPosition.x - eyeX) ** 2 + (insectPosition.y - eyeY) ** 2
            )
        );
        eye.style.transform = `translate(${distance * Math.cos(angle)}px, ${
          distance * Math.sin(angle)
        }px)`;
    };


    return ( <
        MyContext.Provider value = {
            {
                insects,
                addInsect,
                handleDrag,
                currentInsectPosition,
                handleInsectEat,
                moveEye
            }
        } > {
            children
        } 
        </MyContext.Provider>
    )
}

export function useMyContext() {
    const context = useContext(MyContext);
    if (context === undefined) throw new Error('MyContext is used outside of the MyContext.Provider');
    return context;
}