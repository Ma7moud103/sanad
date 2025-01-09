import { RiCloseCircleFill } from "react-icons/ri";
import FormContent from "../FormContent";


function AddGroup({ handleClose, ref }) {
    return (
        <form ref={ref} action={""} className="min-w-[20rem] shadow-2xl sm:min-w-[35rem] max-w-[35rem] bg-HomePageBgImage  p-3 rounded-lg relative z-10  bg-white  flex flex-col">

            <button onClick={handleClose} type="reset" className="self-end" >
                <RiCloseCircleFill className="text-mainColor hover:text-err transition-colors" size={33} />
            </button>
            <FormContent />

            <div className="flex items-center gap-x-3">
                <button onClick={handleClose} type="reset" className="w-1/2 hover:bg-err transition-colors rounded-lg p-2 hover:text-white">Close</button>
                <button className="bg-secondMainColor text-white rounded-lg p-2 w-1/2 transition-all hover:bg-mainColor">Submit</button>
            </div>

        </form>
    )
}

export default AddGroup