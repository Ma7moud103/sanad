import Image from "next/image"
import formLogin_01 from '@/public/form1.svg'
import SignInForm from "../_components/_authUi/SignInForm"
function Page({ children }) {
    return (
        <section className="w-full sm:p-11 sm:py-14 xl:flex xl:justify-between">
            <div className="w-full h-full xl:w-1/2 flex items-center justify-center">
                <div className="w-[30rem] bg-white bg-HomePageBgImage h-full p-5 flex flex-col items-center gap-y-3 sm:rounded-xl ">
                    <header className="text-center">
                        <h1 className="text-mainColor font-bold text-[2rem]">Welcome to Sanad</h1>
                        <p className="text-textGray font-semibold text-[1.1rem]">We Missed You, Sign up to be Up to Date</p>
                    </header>
                    <SignInForm />
                </div>

            </div>

            <div className="image hidden xl:flex justify-center items-center xl:w-1/2 ">
                <Image className="object-cover" src={formLogin_01} alt="login Image" />
            </div>
        </section>)
}

export default Page