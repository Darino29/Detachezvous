import styles from './featured.module.css'
import React from "react"

export const Featured = (): JSX.Element => {
    return (
        <>
            <div className={`${styles.bg}`}>
            <div className={`${styles.features}`}>
                <div className={`${styles.wrapper}`}>
                    <div>
                        <div className={`${styles.title}`}>
                            <h1>LES PNEUS ADAPTÉS À VOTRE VOITURE</h1>
                
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div>
                        <img src="/pneu.png" alt="pneu" />
                    </div>
               
                </div>
            </div>
            </div>
        </>
    )
}