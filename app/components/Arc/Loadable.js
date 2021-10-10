/**
 *
 * Asynchronously loads the component for Arc
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
