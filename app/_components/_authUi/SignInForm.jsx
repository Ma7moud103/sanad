import Link from "next/link"
import Input from "../Input"
import Button from "../Button"

function SignInForm() {
    return (
        <form className="flex flex-col self-start w-full justify-between py-20 h-full"
            action={""}
        >
            <div className="space-y-5">
                <Input
                    name={"emailOrCode"}
                    label={"Email or Code"}
                    type={'email'}
                    placeholder={"type your email or code"}
                />
                <Input
                    name={"password"}
                    label={"Password"}
                    type={'password'}
                    placeholder={"type your password"}
                />
                <div className="rememberMe  cursor-pointer remember-me flex items-center justify-between">
                    <div className="checkbox flex items-center cursor-pointer">
                        <input
                            className="mx-1 outline-mainColor focus:border-mainColor focus:outline-mainColor border-[#BDC4CD] border-[1px] rounded-lg w-[20px] h-[20px] text-mainColor checked:bg-mainColor checked:text-mainColor checked:shadow-none cursor-pointer"
                            id="remember"
                            type="checkbox"
                        />
                        <label
                            htmlFor="remember"
                            className="text-mainColor font-semibold text-xs sm:text-sm "
                        >
                            Remember Me
                        </label>
                    </div>
                    <Link
                        href="/forget-password"
                        className="text-mainColor hover:underline font-semibold text-size_12 sm:text-size__14"
                    >
                        Forget Password
                    </Link>
                </div>
            </div>


            <div className="w-full space-y-1">
                <Button fullWidth intent={"submit"}>
                    Sign In
                </Button>
                <div className="text-center">Do you have account? <Button intent={"link"} isLink={true} href="/login">Sign up now</Button></div>
            </div>


        </form>
    )
}

export default SignInForm