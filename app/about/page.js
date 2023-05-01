'use client'

import Link from 'next/link'
import styles from './../../styles/about.css'
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';



export default function About() {
    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:1300px)' });
    const isDesktopOrMobile2 = useMediaQuery({ query: '(max-width:1000px)' });

    return (
        <>
            {isDesktopOrMobile !== true ?
                //1300 이상
                <First />
                :
                isDesktopOrMobile2 !== true ?
                //1000 이상
                <Middle />
                :
                //1000 이하
                <Mobile />
            }


            <div className="linkbtn">
                <Link href="/">Main</Link>
                <Link href="/../skills">Skills</Link>
                <Link href="/../project">Project</Link>
            </div>
        </>
    )
}


function First() {
    return (
        <div className="about aboutC">
            <section className='imgC'>
                <img src={process.env.PUBLIC_URL + './../img/me1.jpg'} alt="#" />
            </section>
            <section className="textC">
                <h4>About ME</h4>
                <p>개발이 정말 좋아서 하는 사람😆</p>
                <div className='aboutMe'>
                    <div className='intro'>
                        <p><span>NAME_</span>조아라<span /></p>
                        <p><span>BIRTH_</span>1991.12.29<span /></p>
                        <p><span>ADDRESS_</span>인천광역시<span /></p>
                        <p><span>E-MAIL_</span>rovhrud21@gamil.com<span /></p>
                        <p><span>PHONE_</span>010-3018-4885<span /></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Middle() {
    return (
        <div className="about mAboutC">
            <section className='imgC'>
                <img src={process.env.PUBLIC_URL + './../img/me1.jpg'} alt="#" />
            </section>
            <section className="textC">
                <h4>About ME</h4>
                <p>개발이 정말 좋아서 하는 사람😆</p>
                <div className='aboutMe'>
                    <div className='intro'>
                        <p><span>NAME_</span>조아라<span /></p>
                        <p><span>BIRTH_</span>1991.12.29<span /></p>
                        <p><span>ADDRESS_</span>인천광역시<span /></p>
                        <p><span>E-MAIL_</span>rovhrud21@gamil.com<span /></p>
                        <p><span>PHONE_</span>010-3018-4885<span /></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

function Mobile() {
    return (
        <div className="about mAboutC mmAboutC">
            <section className='imgC'>
                <img src={process.env.PUBLIC_URL + './../img/me1.jpg'} alt="#" />
            </section>
            <section className="textC">
                <h4>About ME</h4>
                <p>개발이 정말 좋아서 하는 사람😆</p>
                <div className='aboutMe'>
                    <div className='intro'>
                        <p><span>NAME_</span>조아라<span /></p>
                        <p><span>BIRTH_</span>1991.12.29<span /></p>
                        <p><span>ADDRESS_</span>인천광역시<span /></p>
                        <p><span>E-MAIL_</span>rovhrud21@gamil.com<span /></p>
                        <p><span>PHONE_</span>010-3018-4885<span /></p>
                    </div>
                </div>
            </section>
        </div>
    )
} 


