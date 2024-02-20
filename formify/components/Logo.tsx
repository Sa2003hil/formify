import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <>
            <Link href='/'>
                <div className="text-3xl font-bold tracking-tight text-gradient bg-gradient-to-r from-purple-500 to-green-300 bg-clip-text text-transparent" >Formify</div>
            </Link>
        </>
    )
}

export default Logo