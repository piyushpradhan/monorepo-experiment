import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as monaco from 'monaco-editor';
import Editor from '@monaco-editor/react';

import { saveFile } from '@/api/container';
import { updateEditorContentActions } from '@/redux/actions/editorActions';
import { pickLanguage } from '@/lib/helpers';

import type { RootState } from '@/redux/store';

const MONACO_OPTIONS: monaco.editor.IEditorConstructionOptions = {
  autoIndent: 'full',
  automaticLayout: true,
  contextmenu: true,
  fontFamily: 'monospace',
  fontSize: 13,
  lineHeight: 20,
  hideCursorInOverviewRuler: true,
  matchBrackets: 'always',
  minimap: {
    enabled: false,
  },
  readOnly: false,
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
};

const CustomEditor = () => {
  const dispatch = useDispatch();
  const [code, setCode] = React.useState('');
  const { containerId, currentFile, data } = useSelector(
    (state: RootState) => state.editorReducer
  );

  useEffect(() => {
    setCode(data);
  }, [data]);

  const handleOnSave = () => {
    window.onkeydown = async (e: {
      key: string;
      ctrlKey: boolean;
      preventDefault: () => void;
    }) => {
      if (e.key === 's' && e.ctrlKey === true) {
        e.preventDefault();
        dispatch(updateEditorContentActions(code));
        console.log(code);
        if (code.trim() !== '') await saveFile(containerId, currentFile, code);
        else await saveFile(containerId, currentFile, data);
      }
    };
  };

  // @ts-expect-error - figure out better types
  const editorDidMount = (editor) => {
    if (editor && editor.getModel()) {
      const editorModel = editor.getModel();
      if (editorModel) {
        editorModel?.setValue(data ?? '');
      }
    }
    editor.focus();
  };

  const editorOnChange = (value: string | undefined) => {
    setCode(value!);
  };

  return (
    <div className="w-full" onKeyDown={handleOnSave}>
      <Editor
        width="100%"
        height="70vh"
        language={pickLanguage(currentFile)}
        theme="vs-dark"
        value={data}
        options={MONACO_OPTIONS}
        onChange={editorOnChange}
        onMount={editorDidMount}
      />
    </div>
  );
};

export default CustomEditor;
