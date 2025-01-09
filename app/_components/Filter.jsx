"use client"
import { useEffect, useRef, useState } from "react";
import { VscDiffAdded } from "react-icons/vsc";
import ModalWithPortal from "./_modales/ModalWithPortal";
import Button from "./Button";
import Overlay from "./Overlay";
import AddGroup from "./_modales/AddGroup";
import UseOutSideModal from "../_hooks/UseOutSideModal";


function Filter() {
    const [isOpened, setIsOpened] = useState(false)

    function onClick() {
        setIsOpened(prev => !prev)
    }
    function handleClose() {
        setIsOpened(false)
    }

    useEffect(() => {
        if (isOpened) {
            document.querySelector("body #main").classList.add("blur")
            document.querySelector("body #sidebar").classList.add("blur")
        } else {
            document.querySelector("body #main").classList.remove("blur")
            document.querySelector("body #sidebar").classList.remove("blur")
        }



    }, [isOpened])

    const ref = UseOutSideModal(handleClose)


    return (
        <>
            <Button onClick={onClick}>
                <VscDiffAdded className="text-white" size={22} />
                <span>Add Group</span>
            </Button>

            {isOpened && <ModalWithPortal>
                <Overlay >
                    <AddGroup ref={ref} handleClose={handleClose} />
                </Overlay>
            </ModalWithPortal>
            }
        </>
    )
}

export default Filter