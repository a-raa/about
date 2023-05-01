'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useMediaQuery } from 'react-responsive';


export default function Home() {
  const isDesktopOrMobile = useMediaQuery({ query: '(max-width:920px)' });
  const isDesktopOrMobile2 = useMediaQuery({ query: '(max-width:500px)' });
  return (
    <>

      {isDesktopOrMobile !== true ?
        <div className="content mainC">
          <div className="content_t">
            <div className="bestText">
              <h2>dagdagadg</h2>
              <h2>adgadgadgdag</h2>
            </div>
          </div>
        </div>
        :
        // width 920
        isDesktopOrMobile2 !== true ?
          <div className="content mainC tMainC">
            <div className="content_t">
              <div className="bestText">
                <h2>adgdag</h2>
                <h2>adgadg</h2>
              </div>
            </div>
          </div>
          :
          //width 500
          <div className="content mainC mMainC">
            <div className="content_t">
              <div className="bestText">
                <h2>dgdgadg<br />adgdagadg</h2>
                <h2>adgadgadg<br />adgadg</h2>
              </div>
            </div>
          </div>
      }
    </>
  )
}


