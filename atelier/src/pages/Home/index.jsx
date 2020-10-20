import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react';
import authStore from 'stores/Auth';

const Home = () => {
    const history = useHistory();
    const { user, isLogged, logout } = authStore;

    useEffect(() => {
        if (!isLogged) {
            history.push('/login');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged]);

    return (
        <div className="Home">
            <h2>Hello {user?.name}!</h2>
            <h3>Ton ID: #{user?.id}</h3>
            <button onClick={() => logout()}>Log out</button>
        </div>
    );
};

export default observer(Home);
