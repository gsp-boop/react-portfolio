import {useEffect, useState} from 'react';
import {FaArrowUp} from 'react-icons/fa';
import '../style/scrollToTop.css'

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return() => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="scrollUpContainer">
            <button onClick={scrollToTop} className={isVisible ? 'visible' : 'not_visible'}>
                <FaArrowUp aria-hidden='true'/>
            </button>
        </div>
    )
}

export default ScrollTop;