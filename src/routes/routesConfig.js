import Main from '../page/main/Main'
import SearchAddress from '../page/searchAdress/SearchAddress';

const routesConfig = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/address",
    element: <SearchAddress />,
  },
];

export default routesConfig;