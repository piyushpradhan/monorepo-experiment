import { useEffect, useRef } from 'react';
import type { Ref } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/redux/store';

const BrowserView = () => {
  const { port } = useSelector((state: RootState) => state.editorReducer);
  const browserRef: Ref<HTMLIFrameElement> = useRef(null);
  const { data } = useSelector((state: RootState) => state.editorReducer);
  useEffect(() => {
    browserRef!.current!.src += '';
  }, [data]);

  return (
    <div className="w-full">
      <iframe
        ref={browserRef}
        className="w-full h-full"
        src={import.meta.env.VITE_BASE_URL + '/preview/' + port}
        title="preview window"
      />
    </div>
  );
};

export default BrowserView;
