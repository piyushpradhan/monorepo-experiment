import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { startContainer } from '@/api/container';
import {
  clearEditorAction,
  startLoadingState,
  triggerReadyState,
  updateContainer,
} from '@/redux/actions/editorActions';

import type { RootState } from '@/redux/store';

const CreateContainerButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state: RootState) => state.editorReducer.loading
  );

  const handleClick = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(clearEditorAction());
    dispatch(startLoadingState());
    const response = await startContainer();
    dispatch(updateContainer(response.container, response.reactPort));
    dispatch(triggerReadyState());
    navigate(`/playground/${response.container}`);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {!isLoading ? 'Create Container' : 'Loading...'}
        </span>
      </button>
    </div>
  );
};

export default CreateContainerButton;
