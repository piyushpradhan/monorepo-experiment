import Split from 'react-split';

import CustomEditor from '@/components/Playground/CustomEditor';
import BrowserView from '@/components/Playground/BrowserView';
import CustomTerminal from '@/components/Playground/CustomTerminal';
import FileTree from '@/components/Playground/FileTree';

const Playground = () => {
  const horizontalSizes = [50, 50];
  const verticalSizes = [60, 40];
  return (
    <div className="overflow-y-hidden">
      <div className="p-2 bg-gray-800 font-bold text-white h-full">
        <h2>React Playground</h2>
      </div>
      <Split
        className="bg-gray-800 h-full"
        direction="vertical"
        sizes={verticalSizes}
        gutterSize={10}
        gutterAlign="center"
        dragInterval={1}
        snapOffset={30}
      >
        <div className="flex flex-row w-full h-full">
          <FileTree />
          <Split
            direction="horizontal"
            sizes={horizontalSizes}
            gutterSize={10}
            gutterAlign="center"
            snapOffset={30}
            dragInterval={1}
            className="flex flex-row w-full h-full"
          >
            <CustomEditor />
            <BrowserView />
          </Split>
        </div>
        <div className="w-full h-full">
          <CustomTerminal />
        </div>
      </Split>
    </div>
  );
};

export default Playground;
