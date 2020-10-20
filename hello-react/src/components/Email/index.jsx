import React from 'react';
import CallToAction from 'components/UI/CallToAction';

class Email extends React.Component {
    render () {
        const { firstName, lastName } = this.props;

        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

        return <CallToAction href={`mailto:${email}`}>Envoyer un e-mail</CallToAction>;
    }
}

export default Email;
