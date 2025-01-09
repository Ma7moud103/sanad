import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

function ModalWithPortal({ children }) {
    const [Mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)

    }, [])

    return Mounted ? createPortal(
        children, document.querySelector("#modal")
    ) : null
}

export default ModalWithPortal