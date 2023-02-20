const Modal = ({ children, hideModal, title, large=false }) => {
    return (
        <>
            <div onClick={hideModal} className="fixed z-10 top-0 left-0 bg-black opacity-50 w-screen h-screen">

            </div>
            <div className={`fixed p-4 bg-white ${large ? 'w-[790px]' : 'w-[428px]'} max-w-[85vw] max-h-[85vh] overflow-y-scroll left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-10 rounded-xl`}>
                <svg onClick={hideModal} className="cursor-pointer absolute right-[29px] top-[29px]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#929292" />
                </svg>
                <h2 className="text-[20px] leading-[126%] text-[#3e3e3e] mr-6">{title}</h2>
                <div className="mt-4 border-b"></div>
                {children}
            </div>
        </>
    )
}

export default Modal