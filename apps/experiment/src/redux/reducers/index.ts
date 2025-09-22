import { combineReducers } from '@reduxjs/toolkit';

import { editorReducer } from '@/redux/reducers/editorReducer';
import { fileTreeReducer } from '@/redux/reducers/fileTreeReducer';

export const rootReducer = combineReducers({
  editorReducer,
  fileTreeReducer,
});
