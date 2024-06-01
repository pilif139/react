import './App.css'
import Images from "./Images.jsx";
import {useEffect, useState, useTransition, useRef} from "react";
import Overlay from "./Overlay.jsx";

function App() {
    const API_KEY = "44183093-c6019813d910c4d6195aba512";

    //handling input
    const [isPending, startTransition] = useTransition();
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const debounceTimeoutRef = useRef(null);
    const [query, setQuery] = useState("");
    const handleQuery = (e) =>{
        let str = e.target.value;
        setQuery(str.replace(/ /g, '+'));

        //waiting 500ms after no input is given to fetch images
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            setDebouncedQuery(str.replace(/ /g, '+'));
        }, 500);
    }

    //fetching images if user search a query in input
    let [images, setImages] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let response = await fetch("https://pixabay.com/api/?key=44183093-c6019813d910c4d6195aba512&q="+query+"&image_type=photo");
                let data = await response.json();
                startTransition(()=>{
                   setImages(data.hits);
                });
            }
            catch(err){
                console.log("error fetching data: "+err);
            }
        }
        if(debouncedQuery) {
            fetchData();
        }
    },[debouncedQuery])

    return(
        <>

            <h1>Image Gallery</h1>
            <input type="text" placeholder="Search..." onChange={(e) => handleQuery(e)}/>
            { isPending ? <p>Loading images...</p> :
            <Images images={images} ></Images>
            }
        </>
    )
}

export default App
