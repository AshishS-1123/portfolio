import React from 'react';
// import PropTypes from 'prop-types'

import ContactLinks from 'components/ContactLinks/Loadable';
import Envelope from 'components/Envelope/Loadable';
import ContactBar from '../../components/ContactBar';

export function FooterSection() {
  return (
    <React.Fragment>
      <ContactLinks />
      <Envelope />
      <ContactBar />
    </React.Fragment>
  );
}

FooterSection.propTypes = {};

export default FooterSection;
