import React, { useEffect, useState , useRef } from 'react';


const useScrollDetection = () => {

    const [scrollingDirection, setScrollDirection] = useState("");
    const prevScrollY = useRef();
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);
    const handleScroll = () => {
        prevScrollY.current > window.scrollY ? setScrollDirection("UP"):  setScrollDirection("DOWN");

        prevScrollY.current = window.scrollY;
    };
  return scrollingDirection;
}

export default useScrollDetection