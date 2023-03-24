import Button from './Button'
import { AiFillMail } from 'react-icons/ai'

function Contact() {
    return (
        <div className="mx-auto flex max-w-[20rem] flex-col items-center md:mx-0">
            <AiFillMail size="80" className="text-pink-600" />
            <h1 className="font-bold">Find it first on Indiegogo </h1>
            <h2>
                Discover new and clever products in the Indiegogo newsletter
            </h2>
            <input
                className="mt-6 px-6 py-4 text-gray-600 outline-none"
                placeholder="Your email address"
                type="text"
            />
            <p className="mb-4 mt-2">
                I agree to the Terms of Use and have read and understand the
                Privacy Policy
            </p>
            <Button solid className>
                SIGN ME UP
            </Button>
        </div>
    )
}

export default Contact
