const Footer = () => {
    return (
        <footer className={`h-auto w-full flex justify-center items-center bg-white text-black font-serif font-bold text-lg pb-6 text-center gap-2`}>
            <p className="lining-nums">© {new Date().getFullYear()}</p> <p className="bg-gradient-to-r from-[#314b9e] via-[#a0358c] to-[#ce2d2d] bg-clip-text text-transparent">Tata Consultancy Services Limited</p> <p> | All rights reserved.</p>
        </footer>
    )
}

export default Footer
