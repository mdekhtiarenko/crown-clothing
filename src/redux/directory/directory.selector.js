import {createSelector} from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectoryItems = createSelector(
    [selectDirectory],
    (selectDirectory) => selectDirectory.directoryItems
);

