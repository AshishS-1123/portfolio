/**
 *
 * Asynchronously loads the component for ProjectCards
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
