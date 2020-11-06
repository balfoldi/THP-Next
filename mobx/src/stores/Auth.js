import { makeObservable, observable, action, computed, runInAction } from 'mobx';

class AuthStore {
    isFetching = false;
    user = null;
    error = null;

    constructor() {
        makeObservable(this, {
            user: observable,
            error: observable,
            isLogged: computed,
            login: action,
            logout: action,
        });
    }

    get isLogged() {
        return !!this.user?.id;
    }

    login = async (email, password) => {
        this.error = null;

        if (this.isFetching) {
            return;
        }

        try {
            this.isFetching = true;

            // Fake API, do not use it like that!!
            const response = await fetch('http://localhost:3000/auth_response.json', {
                method: 'get',
                // method: 'post',
                // body: { email, password },
            });
            const data = await response.json();

            if (data.error) {
                throw new Error(`Erreur: ${data.error}`);
            }

            runInAction(() => {
                this.user = data.user;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error.message;
            });
        } finally {
            this.isFetching = false;
        }
    }

    logout = () => {
        this.user = null;
        this.error = null;
    }
}

export default new AuthStore();
