const WhatsappButton = () => {
    const number = process.env.NUMBER;
    const text = 'I have an Enquiry.'
    const link = `https://wa.me/${number}?text=${text}`

    return (
        <a href={link} className="fixed bottom-[80px] right-[15px] z-50 bg-white rounded-full h-[60px] w-[60px] p-3 hover:bottom-[20px] md:bottom-[25px] md:right-[30px] md:hover:bottom-[35px] hover:shadow-xl hover:shadow-gray-600 transition-all duration-300"><img src=" /whatsapp.svg" className="h-full w-full" /></a>
    )
}

export default WhatsappButton
