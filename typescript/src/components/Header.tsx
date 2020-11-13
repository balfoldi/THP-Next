import React from 'react';
import { User } from 'types/models.d';

type Props = {
    user: User | null,
    onClickLogout: () => void,
};

const Header = (props: Props): JSX.Element => {
    const { user, onClickLogout } = props;

    if (!user) {
        return <span>C'est qui ?</span>;
    }

    return (
        <div className="Header">
            {user.name}
            <button onClick={onClickLogout}>Log out</button>
        </div>
    );
}

export default Header;
