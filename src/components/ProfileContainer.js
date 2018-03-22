import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WineForm from './WineForm';
import { guide } from '../data/guide';
import TagPicker from './TagPicker';
import Wizard from './Wizard';

console.log('guide', guide);

class Profile extends PureComponent {
  render() {
    return (
      <section className="section">
        <WineForm />
        {/* <div className="tabs is-centered">
          <ul>
            <li className="is-active">Sight</li>
            <li>Nose</li>
            <li>Pallet</li>
          </ul>
        </div> */}
        <div>
          <TagPicker />
          {/* <Wizard /> */}
        </div>
      </section>
    )
  }
}

export default Profile;