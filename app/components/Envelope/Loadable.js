/**
 *
 * Asynchronously loads the component for Envelope
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
