import Link from 'next/link'
import Contact from './Contact'

function FooterLink({ children }) {
    return (
        <ul>
            <Link href="#!" className="hover:underline">
                {children}
            </Link>
        </ul>
    )
}

function Footer() {
    return (
        <>
            <div className="w-screen bg-slate-50 px-4 pt-10 md:flex md:flex-row-reverse md:items-center md:justify-between lg:px-40">
                <Contact />
                <hr className="my-8 h-[0.1rem] bg-gray-400" />
                <ul className="md:flex md:items-start">
                    <li className="mx-8  mb-8">
                        <h1 className="text my-2 text-xl text-gray-600">
                            EXPLORE
                        </h1>
                        <ul>
                            <FooterLink>What we do</FooterLink>
                            <FooterLink>Funding</FooterLink>
                        </ul>
                    </li>
                    <li className="mx-8  mb-8">
                        <h1 className="my-2 text-xl text-gray-600">ABOUT</h1>
                        <ul>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>Blog</FooterLink>
                            <FooterLink>Trust & Safety</FooterLink>
                            <FooterLink>Help & Support</FooterLink>
                            <FooterLink>Press</FooterLink>
                            <FooterLink>Carerrs</FooterLink>
                            <FooterLink>Contact</FooterLink>
                        </ul>
                    </li>
                    <li className="mx-8  mb-8">
                        <h1 className="my-2 text-xl text-gray-600">
                            Entrepreneurs
                        </h1>
                        <ul>
                            <FooterLink>How It Works</FooterLink>
                            <FooterLink>Indiegogo vs. Kickstarter</FooterLink>
                            <FooterLink>Education Center</FooterLink>
                            <FooterLink>Experts Directory</FooterLink>
                            <FooterLink>Fees </FooterLink>
                            <FooterLink>Enterprise </FooterLink>
                            <FooterLink>China</FooterLink>
                        </ul>
                    </li>
                </ul>
                <hr className="h-[0.1rem] bg-gray-400" />
            </div>
            <h1 className="bg-slate-50 py-4 text-center text-gray-600">
                @2023
            </h1>
        </>
    )
}

export default Footer
