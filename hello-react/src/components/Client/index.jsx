import './index.scss';
import React from 'react';
import Email from 'components/Email';
import Phone from 'components/Phone';

class Client extends React.Component {
    render () {
        const { firstName, lastName, phoneNumber, image } = this.props;

        return (
            <li className="Client">
                <img src={image} alt="Avatar" className="Client__image" />
                <h3>{firstName} {lastName}</h3>
                <p><Email firstName={firstName} lastName={lastName} /></p>
                <p><Phone number={phoneNumber} /></p>
            </li>
        );
    }
}

export default Client;
