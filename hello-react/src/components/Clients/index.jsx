import './index.scss';
import React from 'react';
import faker from 'faker';
import Client from 'components/Client';

class Clients extends React.Component {
    render () {
        const clientsList = Array.from({ length: 100 }, () => ({
            id: faker.random.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            phoneNumber: faker.phone.phoneNumber(),
            image: faker.image.avatar(),
        }));

        return (
            <ul className="Clients">
                {clientsList.map(({ id, firstName, lastName, phoneNumber, image }) => (
                    <Client
                        key={id}
                        firstName={firstName}
                        lastName={lastName}
                        phoneNumber={phoneNumber}
                        image={image}
                    />
                ))}
            </ul>
        );
    }
}

export default Clients;
