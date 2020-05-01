import {createSelector} from 'reselect';

const selectDirectory = state => state.directory;       /* gets state and returns directory */

export const selectDirectorySections = createSelector(
    [selectDirectory],                          /* takes in selectDirectory */
    directory => directory.sections             /* returns  sections*/
)