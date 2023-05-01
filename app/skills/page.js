'use client'
import Link from 'next/link'
import styles from './../../styles/skills.css'
import { useMediaQuery } from 'react-responsive';

export default function Skills() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:1300px)' });
    const isDesktopOrMobile2 = useMediaQuery({ query: '(max-width:1000px)' });
    return (
        <>
        {isDesktopOrMobile !== true ?
        //1300 이상
        <First/>
        :
        isDesktopOrMobile2 !== true ?
        //1000 이하
        <Middle />
        :
        <Mobile />
    }
            <div className="linkbtn">
                <Link href="/">Main</Link>
                <Link href="/../about">About</Link>
                <Link href="/../project">Project</Link>
            </div>
        </>


    )
}

function First() {
    let item = ['html', 'css', 'javascript', 'typescript', 'react', 'nodejs', 'nextjs']

    return (
        <div className="content skillsC">
            <div className="title">
                <h4>Skills</h4>
            </div>
            <div className="skillImg">
                {item.map((a, i) => {
                    return (
                        <img key={i} className='sImg' src={process.env.PUBLIC_URL + `./../img/skill${i + 1}.png`} alt={a} />
                    )
                })}
            </div>
        </div>
    )
}

function Middle() {
    let item = ['html', 'css', 'javascript', 'typescript', 'react', 'nodejs', 'nextjs']

    return (
        <div className="content skillsC mSkillsC">
            <div className="title">
                <h4>Skills</h4>
            </div>
            <div className="skillImg">
                {item.map((a, i) => {
                    return (
                        <img key={i} className='sImg' src={process.env.PUBLIC_URL + `./../img/skill${i + 1}.png`} alt={a} />
                    )
                })}
            </div>
        </div>
    )
}

function Mobile() {
    let item = ['html', 'css', 'javascript', 'typescript', 'react', 'nodejs', 'nextjs']

    return (
        <div className="content skillsC mmSkillsC">
            <div className="title">
                <h4>Skills</h4>
            </div>
            <div className="skillImg">
                {item.map((a, i) => {
                    return (
                        <img key={i} className='sImg' src={process.env.PUBLIC_URL + `./../img/skill${i + 1}.png`} alt={a} />
                    )
                })}
            </div>
        </div>
    )
}
