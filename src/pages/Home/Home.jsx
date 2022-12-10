import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Container } from 'components/Container/Container';
import { Pagination } from 'components/Pagination/Pagination';
import { Posts } from 'components/Posts/Posts.styled';
import { Footer } from 'components/Footer/Footer.styled';

const HomePage = () => {
  return (
    <>
      <div className="App">
        <div className="content">
          <Loader />
          <Header />
          <Hero />
          <Container>
            <Pagination />
          </Container>
          <Posts />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
