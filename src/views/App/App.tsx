import { Route, Routes } from 'react-router-dom';
import { NotFound, Searcher } from 'views';
import { MainSection, Wrapper } from './App.styles';
import { Typography } from '../../components';

export const App = () => {
  return (
    <Wrapper>
      <header>
        <Typography variant="title">Search Jokes</Typography>
      </header>
      <MainSection>
        <Routes>
          <Route path="/" element={<Searcher />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};
