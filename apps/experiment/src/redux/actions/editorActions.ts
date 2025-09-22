import ActionTypes from '@/redux/actions/utils/actionTypes';

export const updateContainer = (containerId: string, port: string) => ({
  type: ActionTypes.UPDATE_CONTAINER_ID,
  payload: { containerId, port },
});

export const startLoadingState = () => ({
  type: ActionTypes.LOADING,
});

export const triggerReadyState = () => ({
  type: ActionTypes.READY,
});

export const updateEditorContentActions = (content: string) => ({
  type: ActionTypes.UPDATE_EDITOR,
  payload: content,
});

export const updateCurrentFile = (filePath: string) => ({
  type: ActionTypes.UPDATE_CURRENT_FILE,
  payload: filePath,
});

export const updatePort = (port: number) => ({
  type: ActionTypes.UPDATE_PORT,
  payload: port,
});

export const saveFile = (contents: string) => ({
  type: ActionTypes.SAVE,
  payload: contents,
});

export const clearEditorAction = () => ({
  type: ActionTypes.CLEAR,
});
