import { useRef, useEffect, useState } from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = () => {
    const containerRef = useRef(null)
    const [startCount, setStartCount] = useState(false)

    useEffect(() => {
        let trigger;
        if (containerRef.current) {
            trigger = ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 80%',
                onEnter: () => setStartCount(true),
                once: true,
            })
        }
        return () => {
            if (trigger) trigger.kill()
        }
    }, [])

    return (
        <div
            id="counter"
            className="padding-x-lg xl:mt-0 mt-32"
            ref={containerRef}
        >
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, idx) => (
                    <div
                        className="counter-card bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                        key={item.label}
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            {startCount ? (
                                <CountUp suffix={item.suffix} end={item.value} />
                            ) : (
                                <span>0{item.suffix}</span>
                            )}
                        </div>
                        <div className="text-white-50 text-lg">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter