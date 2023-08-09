import { ReactNode } from "react";
import styles from './MainLayout.module.scss'

export const MainLayout = ({ children }: { children: ReactNode}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}