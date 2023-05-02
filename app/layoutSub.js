

'use client'
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';


export default function LayoutSub() {


    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:1000px)' });
    return (
        <>
            {

                isDesktopOrMobile !== true ?
                    <Content a='navbtn' />
                    :
                    <Content a='navbtn tNavbtn' />
            }
        </>
    )
}

function Content({a}) {
    const router = useRouter();
    return (
        <div className={a}>
            <button onClick={() => { router.back() }}>PREV</button>
            <button onClick={() => { router.push('/menu') }}>MENU</button>
        </div>
    )
}
