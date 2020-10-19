import React from 'react';
import CallToAction from 'components/UI/CallToAction';

class Phone extends React.Component {
    render () {
        const { number } = this.props;
        return <CallToAction href={`callto:${number}`}>Appeler</CallToAction>;
    }
}

export default Phone;
