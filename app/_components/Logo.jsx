import Image from "next/image"
import logo from '@/public/logo.svg'
function Logo({ w = 'auto', h = 'auto' }) {
    return (
        <div className="my-6">
            <Image

                src={logo}
                alt="logo"
            // width={h}
            // height={h}
            />
        </div>
    )
}

export default Logo