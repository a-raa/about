'use client'

import Link from 'next/link'
import styles from './../../styles/header.css'
import { useMediaQuery } from 'react-responsive';


export default function Header() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:1000px)' });
    return (
        <>
            {isDesktopOrMobile !== true ?
                //1000 이상
                <header className='dHeader'>
                    <h1 className='hTitle'>
                        <Link href="/">
                            <img src={process.env.PUBLIC_URL + './../img/icon.png'} alt="#" />
                        </Link>
                    </h1>
                    <div className="circle">
                        <Link href="/menu" className="menu" />
                    </div>
                    <p>portfolio</p>
                </header>
                :
                //1000 이하
                <header className='mHeader'>
                    <h1 className='hTitle'>
                        <Link href="/">
                            <img src={process.env.PUBLIC_URL + './../img/icon.png'} alt="#" />
                        </Link>
                    </h1>
                    <div className="circle">
                        <Link href="/menu" className="menu" />
                    </div>
                    <p>portfolio</p>
                </header>
            }
        </>
    )
}

//header