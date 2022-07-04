import { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { AllAppProviders } from 'providers';

type AllTheProvidersProps = { children: ReactNode; history: MemoryHistory };

const AllTheProviders = ({ children, history }: AllTheProvidersProps) => {
  return (
    <Router location={history.location} navigator={history}>
      <AllAppProviders> {children}</AllAppProviders>
    </Router>
  );
};

const customHookRender = (useHook: (props: { children: ReactNode }) => any, options?: { route: string }) => {
  const initialRoute = options?.route || '/';
  const history = createMemoryHistory({ initialEntries: [initialRoute] });
  history.push(initialRoute);

  return renderHook(useHook, {
    wrapper: (props) => (
      <AllTheProviders {...props} history={history}>
        {props.children}
      </AllTheProviders>
    ),
  });
};

const customRender = (ui: ReactElement, options?: { route: string }) => {
  const initialRoute = options?.route || '/';
  const history = createMemoryHistory({ initialEntries: [initialRoute] });
  history.push(initialRoute);

  render(ui, {
    wrapper: (props) => (
      <AllTheProviders {...props} history={history}>
        {props.children}
      </AllTheProviders>
    ),
    ...options,
  });

  return { routerHistory: history };
};

export * from '@testing-library/react';

export { customRender as render, customHookRender as renderHook, act };
