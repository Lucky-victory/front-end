import { Box } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const CollectionViewPage = () => {
    return (
        <div className="page">
            <Navbar />
            <Box px={6} mt={'calc(2rem + var(--navbar-height))'} minH={400}>
                <div className="">collection view</div>
            </Box>
            <Footer />
        </div>
    );
};

export default CollectionViewPage;
