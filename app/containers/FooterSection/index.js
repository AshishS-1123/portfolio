import React from 'react';

import ContactLinks from 'components/ContactLinks/Loadable';
import Envelope from 'components/Envelope/Loadable';

export function FooterSection() {
  return (
    <React.Fragment>
      <ContactLinks />
      <Envelope />
    </React.Fragment>
  );
}

FooterSection.propTypes = {};

export default FooterSection;
