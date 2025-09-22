enum ActionTypes {
  SAVE = 'SAVE',
  LOADING = 'LOADING',
  READY = 'READY',
  UPDATE_EDITOR = 'UPDATE_EDITOR',
  CREATE_FILE = 'CREATE_FILE',
  UPDATE_CURRENT_FILE = 'UPDATE_CURRENT_FILE',
  UPDATE_FILE_TREE = 'UPDATE_FILE_TREE',
  UPDATE_CONTAINER_ID = 'UPDATE_CONTAINER_ID',
  UPDATE_PORT = 'UPDATE_PORT',
  CLEAR = 'CLEAR',
}

interface ClearAction {
  type: ActionTypes.CLEAR;
}

interface UpdatePortAction {
  type: ActionTypes.UPDATE_PORT;
  payload: number;
}

interface EditorSaveAction {
  type: ActionTypes.SAVE;
  payload: any;
}

interface EditorReadyAction {
  type: ActionTypes.READY;
}

interface EditorLoadingAction {
  type: ActionTypes.LOADING;
}

interface EditorUpdateEditorAction {
  type: ActionTypes.UPDATE_EDITOR;
  payload: string;
}

interface EditorUpdateCurrentFileAction {
  type: ActionTypes.UPDATE_CURRENT_FILE;
  payload: string;
}

interface FileTreeLoadingAction {
  type: ActionTypes.LOADING;
}

interface FileTreeReadyAction {
  type: ActionTypes.READY;
}

interface FileTreeUpdateAction {
  type: ActionTypes.UPDATE_FILE_TREE;
  payload: any;
}

interface UpdateContainerAction {
  type: ActionTypes.UPDATE_CONTAINER_ID;
  payload: Object;
}

export type Action =
  | EditorSaveAction
  | EditorReadyAction
  | EditorLoadingAction
  | EditorUpdateEditorAction
  | EditorUpdateCurrentFileAction
  | FileTreeLoadingAction
  | FileTreeReadyAction
  | FileTreeUpdateAction
  | UpdateContainerAction
  | UpdatePortAction
  | ClearAction;

export default ActionTypes;
