import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            Hero Banner
            <div>
                <h2>Best Selling Products</h2>
                <p>minerals of many variations</p>

                <div>
                    {['product1', 'product2', 'product3'].map(product => product)}
                </div>
            </div>

            Footer
        </>
    )
}
