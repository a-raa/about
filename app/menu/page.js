'use client'
import Link from 'next/link'
import styles from './../../styles/menu.css'
import { useMediaQuery } from 'react-responsive';

export default function Menu() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:1200px)' });
    return (
        <>
            {isDesktopOrMobile !== true ?
                <div className="navMenu">
                    <Link href="/about" className="linkTag">About<BoxBorder /></Link>
                    <Link href="/skills" className="linkTag">Skills<BoxBorder /></Link>
                    <Link href="/project" className="linkTag">Project<BoxBorder /></Link>
                </div>
                :
                <div className="navMenu mNavMenu">
                    <Link href="/about" className="linkTag">About<BoxBorder /></Link>
                    <Link href="/skills" className="linkTag">Skills<BoxBorder /></Link>
                    <Link href="/project" className="linkTag">Project<BoxBorder /></Link>
                </div>
            }

        </>

    )
}

function BoxBorder() {
    return (
        <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </>
    )
}