import { Route, Routes } from 'react-router-dom';
import { NotFound, Searcher, User } from 'views';
import { TopBar } from 'components';
import { MainSection, Wrapper } from './App.styles';

export const App = () => {
  return (
    <Wrapper>
      <TopBar />
      <MainSection>
        <Routes>
          <Route path="/" element={<Searcher />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainSection>
    </Wrapper>
  );
};
