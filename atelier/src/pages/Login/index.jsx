import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react';
import authStore from 'stores/Auth';

const Login = () => {
    const history = useHistory();
    const { login, isLogged, error } = authStore;

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        login(email, password);
    };

    useEffect(() => {
        if (isLogged) {
            history.push('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogged]);

    return (
        <form className="Login" onSubmit={handleSubmit}>
            <h2>Connexion</h2>
            <input type="email" name="email" />
            <input type="password" name="password" />
            <button type="submit">GO</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default observer(Login);
