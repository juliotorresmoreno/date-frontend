
import React from 'react';
import Person from '../Person';

const People = () => {
    const people = [1];
    return (
        <>{people.map((person, index) => <Person key={index} />)}</>
    );
};

export default People;