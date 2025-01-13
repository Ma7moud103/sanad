"use client"
import { useEffect, useRef, useState } from "react";
import { VscDiffAdded } from "react-icons/vsc";
import ModalWithPortal from "./_modales/ModalWithPortal";
import Button from "./Button";
import Overlay from "./Overlay";
import AddGroup from "./_modales/AddGroup";
import UseOutSideModal from "../_hooks/UseOutSideModal";


function Filter({ grades, courses, teachers }) {
    const [isOpened, setIsOpened] = useState(false)

    function onClick() {
        setIsOpened(prev => !prev)
    }
    function handleClose() {
        setIsOpened(false)
    }

    const ref = UseOutSideModal(handleClose)


    return (
        <>
            <Button onClick={onClick}>
                <VscDiffAdded className="text-white" size={22} />
                <span>Add Group</span>
            </Button>

            {isOpened && <ModalWithPortal>
                <Overlay>
                    <AddGroup teachers={teachers} courses={courses} grades={grades} ref={ref} handleClose={handleClose} />
                </Overlay>
            </ModalWithPortal>
            }
        </>
    )
}

export default Filter