'use client'

import { useEffect, useState } from "react"

const CartIcon = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const cart = localStorage.getItem('cart')
        if (cart) {
            setCount(JSON.parse(cart).cartItems.length)
        }


    }, [])

    return (
        <a className="h-[80px] flex items-center justify-center md:pr-10" href="/cart">
            <div className="h-[30px] w-30px relative">
                <img src="/cartIcon.png" className="h-[30px] w-[30px]" />
                <div className="absolute text-xs h-[15px] w-[15px] rounded-lg -top-2 -right-2 z-50 bg-themeBlue border-white border flex justify-center items-center">{count}</div>
            </div>
        </a>
    )
}

export default CartIcon
