import Link from 'next/link';
import Navbar from '../components/Navbar';

import styles from '../styles/Explore.module.css';
import { Image } from '@chakra-ui/react';

const collectionsData = [
    {
        id: 1,
        name: 'bscNFT',
        image: '/bitcoin.png',
        items: 4,
    },
    {
        id: 2,
        name: 'polyNFT',
        image: '/matic.jpg',
        items: 5,
    },
    {
        id: 3,
        name: 'ftmNFT',
        image: '/ethereum.jpg',
        items: 1,
    },
    {
        id: 4,
        name: 'routerNFT',
        image: '/binanceusd.png',
        items: 15,
    },
    {
        id: 5,
        name: 'avaxNFT',
        image: '/tetherusd.jpg',
        items: 5,
    },
];

const Explore = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Explore Collections</h1>
                <div className={styles['collection-list']}>
                    {collectionsData.map((collection) => (
                        <Link
                            className={styles['collection-item']}
                            href={`/collection/${collection.id}`}
                            key={crypto.randomUUID()}
                        >
                            <div className={styles['collection-img-wrap']}>
                                <Image
                                    src={collection.image}
                                    alt={collection.name}
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                            <div className={styles['collection-content']}>
                                <h2>{collection.name}</h2>
                                <p>{collection.items} items</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
