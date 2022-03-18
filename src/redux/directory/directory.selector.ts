import {createSelector} from "reselect";
import {State} from "../store.types";
import {Directory, DirectoryItem} from "./directory.types";

const selectDirectory = (state: State): Directory => state.directory;

export const selectDirectoryItems = createSelector(
    [selectDirectory],
    (selectDirectory: Directory): DirectoryItem[] => selectDirectory.directoryItems
);

