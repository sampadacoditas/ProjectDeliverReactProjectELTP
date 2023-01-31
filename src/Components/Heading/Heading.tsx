import React from 'react'
import styles from "./Heading.module.scss"
export const Heading = ({heading}:any) => {
  return (
    <>
    <h1 className={styles.Heading}>{heading}</h1>
    </>
  )
}
