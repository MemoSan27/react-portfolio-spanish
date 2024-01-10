import { useEffect, useRef, useState } from "react";



const useIntersection = ( options = {} ) => {
    
    const [ isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef();
    
        useEffect( () => {
            const element = elementRef.current;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach( entry => {
                    setIsIntersecting(entry.isIntersecting);
                });
            }, options);
    
            if(element){
                observer.observe(element);
            }

            return () => {
                if(element) {
                    observer.unobserve(element)
                }
            };
        }, []);

    return [ elementRef, isIntersecting ];    
}

export default useIntersection;
