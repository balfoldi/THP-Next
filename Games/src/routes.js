import Home from './pages/Home';
import PageList from './pages/PageList';
import PageDetail from './pages/PageDetail';
import NotFound from './pages/NotFound';

const routes = {
    '': Home,
    'list': PageList,
    'detail': PageDetail,
    'notFound': NotFound,
}

export default routes;
