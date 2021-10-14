/**
 *
 * TimelineSection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';

export function TimelineSection() {
  return (
    <div>
      <Helmet>
        <title>TimelineSection</title>
        <meta name="description" content="Description of TimelineSection" />
      </Helmet>
    </div>
  );
}

TimelineSection.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(TimelineSection);
