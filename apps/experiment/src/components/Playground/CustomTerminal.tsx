import { useState } from 'react';
import { useSelector } from 'react-redux';
import Terminal, { TerminalOutput } from 'react-terminal-ui';

import { executeCommands } from '@/api/container';
import type { RootState } from '@/redux/store';

const CustomTerminal = () => {
  const [terminalData, setTerminalData] = useState<string[]>([]);
  const { containerId } = useSelector(
    (state: RootState) => state.editorReducer
  );

  const handleTerminalCommands = async (command: string) => {
    executeCommands(command, containerId)
      .then((res) => res.text())
      .then((data) => {
        setTerminalData([...terminalData, data]);
      });
  };

  return (
    <div className="flex flex-col bg-black w-full">
      <Terminal onInput={handleTerminalCommands}>
        {terminalData.map((item) => (
          <TerminalOutput>{item}</TerminalOutput>
        ))}
      </Terminal>
    </div>
  );
};

export default CustomTerminal;
