import ActionTypes from '../actions/utils/actionTypes';

export interface FileTreeNode {
  name: string;
  type: string;
  path: string;
  children: FileTreeNode[];
}

export interface FileTreeState {
  loading: boolean;
  data: FileTreeNode[];
}

const initialState: FileTreeState = {
  loading: false,
  data: [
    {
      name: 'src',
      type: 'folder',
      path: '/app/src',
      children: [
        {
          name: 'index.js',
          type: 'file',
          path: '/app/src/index.js',
          children: [],
        },
        {
          name: 'index.css',
          type: 'file',
          path: '/app/src/index.css',
          children: [],
        },
        {
          name: 'App.js',
          type: 'file',
          path: '/app/src/App.js',
          children: [],
        },
        {
          name: 'App.css',
          type: 'file',
          path: '/app/src/App.css',
          children: [],
        },
      ],
    },
    {
      name: 'package.json',
      type: 'file',
      path: '/app/package.json',
      children: [],
    },
    {
      name: 'package-lock.json',
      type: 'file',
      path: '/app/package-lock.json',
      children: [],
    },
  ],
};

export const fileTreeReducer = (
  state: FileTreeState = initialState,
  action: any
) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.READY:
      return {
        ...state,
        loading: false,
      };
    case ActionTypes.CREATE_FILE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
