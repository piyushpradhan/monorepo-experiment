import type { FileTreeNode } from '@/redux/reducers/fileTreeReducer';

type Props = {
  item: FileTreeNode;
  idx: number;
  openFile: Function;
};

const FileTreeNodeComponent = (props: Props) => {
  return (
    <button
      onClick={() => props.openFile(props.item)}
      className="flex flex-col align-start text-sm w-full"
      key={`${props.item.path}-${props.idx}`}
    >
      <p
        className="pl-4 pr-16 py-1 text-start w-full hover:bg-black"
        key={`${props.item.path}`}
      >
        {props.item.name}
      </p>
      {props.item.children.map((child, idx: number) => {
        return (
          <FileTreeNodeComponent
            idx={idx}
            item={child}
            openFile={props.openFile}
          />
        );
      })}
    </button>
  );
};

export default FileTreeNodeComponent;
