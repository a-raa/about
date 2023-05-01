'use client'
import Link from 'next/link'
import styles from './../../styles/menu.css'
import { useMediaQuery } from 'react-responsive';

export default function Menu() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:1300px)' });
    return (
        <>
            {isDesktopOrMobile !== true ?
                //1300 이상
                <Content c='navMenu' />
                :
                <Content c='navMenu mNavMenu' />
            }

            <div className="linkbtn">
                <Link href="/">Main</Link>
                <Link href="/../skills">Skills</Link>
                <Link href="/../project">Project</Link>
            </div>

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

function Content({ c }) {
    return (
        <div className={c}>
            <Link href="/about" className="linkTag">About<BoxBorder /></Link>
            <Link href="/skills" className="linkTag">Skills<BoxBorder /></Link>
            <Link href="/project" className="linkTag">Project<BoxBorder /></Link>
        </div>
    )

}
