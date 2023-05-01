

'use client'
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';


export default function LayoutSub() {
    const router = useRouter();

    const isDesktopOrMobile = useMediaQuery({ query: '(max-width:1000px)' });
    return (
        <>
            {
                
                isDesktopOrMobile !== true ?
                    <div className="navbtn">
                        <button onClick={() => { router.back() }}>PREV</button>
                        <button onClick={() => { router.push('/menu') }}>MENU</button>
                    </div>
                    :
                    <div className="navbtn tNavbtn">
                        <button onClick={() => { router.back() }}>PREV</button>
                        <button onClick={() => { router.push('/menu') }}>MENU</button>
                    </div>
            }
        </>
    )
}


