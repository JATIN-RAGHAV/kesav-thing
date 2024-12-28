const ScrollToEnquiry = () => {
    const text = 'ENQUIRE NOW!!'
    return (
        <a href="#enquiryForm" className="group fixed right-[-42px] top-[50%] translate-y-[-50%] bg-themeBlue px-2 py-2 rounded-t-lg text-white text-sm -rotate-90 hover:bg-white hover:text-themeBlue transition-all hover:border border-themeBlue">
            {text}
        </a>

    )
}
// <div className="w-full h-0 group-hover:h-full absolute z-50 bg-white bottom-0 left-0 rounded-t-lg transition-all text-themeBlue flex items-center justify-center">{text}</div>

export default ScrollToEnquiry;
