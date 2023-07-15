import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Home: NextPage = () => {
    return (
        <div className="page">
            <Head>
                <title>Cross</title>
                <meta
                    content="Cross | Buy, Sell and Collect NFTs"
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <Navbar bg="dark" />
            <main>
                <Hero />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
