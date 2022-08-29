import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h3>prop drilling</h3>
      <List banana={people} />
    </section>
  );
};

const List = ({ banana }) => {
  console.log(banana);
  return (
    <>
      {banana.map((person) => {
        return <SinglePerson key={person.id} banana={person} />;
      })}
    </>
  );
};

const SinglePerson = ({ banana }) => {
  return (
    <div className="item">
      <h4>{banana.id}</h4>
      <h4>{banana.name}</h4>
    </div>
  );
};

export default PropDrilling;
