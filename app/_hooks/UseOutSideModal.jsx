import { useEffect, useRef } from "react"

function UseOutSideModal(handleClose, captured = true) {
    const ref = useRef()

    useEffect(() => {

        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                handleClose()
            }

        }
        document.addEventListener("click", handleClick, captured)
        return () => document.removeEventListener("click", handleClick, captured)
    }, [handleClose])

    return ref
}

export default UseOutSideModal