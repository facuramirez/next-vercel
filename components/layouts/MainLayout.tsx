import { FC } from "react";
import styles from "./MainLayout.module.css";
import Head from "next/head";
import { Navbar } from '../Navbar';

export const MainLayout: FC = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Facundo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};
