import { useDispatch, useSelector } from 'react-redux';

import { fetchFileContents } from '@/api/container';
import FileTreeNodeComponent from '@/components/Playground/FileTreeNodeComponent';
import {
  updateEditorContentActions,
  updateCurrentFile,
} from '@/redux/actions/editorActions';

import type { FileTreeNode } from '@/redux/reducers/fileTreeReducer';
import type { RootState } from '@/redux/store';

const FileTree = () => {
  const items: FileTreeNode[] = useSelector(
    (state: RootState) => state.fileTreeReducer.data
  );
  const dispatch = useDispatch();
  const { containerId } = useSelector(
    (state: RootState) => state.editorReducer
  );
  const openFile = async (item: FileTreeNode) => {
    if (item.type === 'file') {
      const data = await fetchFileContents(containerId!, item.path);
      dispatch(updateCurrentFile(item.path));
      dispatch(updateEditorContentActions(data));
    }
  };

  return (
    <div className="py-4 bg-gray-800 text-white">
      {items.map((item, idx) => {
        return (
          <FileTreeNodeComponent idx={idx} item={item} openFile={openFile} />
        );
      })}
    </div>
  );
};

export default FileTree;
