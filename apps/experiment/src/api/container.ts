import { formatFileContents } from '@/lib/helpers';

export const startContainer = async () => {
  const response = await fetch(
    import.meta.env.VITE_BASE_URL + '/containers/start',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.json();
};

export const updateContainerFileContents = (
  containerId: string,
  content: string,
  filePath: string
) => {
  fetch(import.meta.env.VITE_BASE_URL + `/containers/${containerId}/exec`, {
    method: 'POST',
    body: `command=echo ${content} > ${filePath}`,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error(error));
};

export const fetchFileContents = async (
  containerId: string,
  filePath: string
) => {
  const contents = await fetch(
    import.meta.env.VITE_BASE_URL + `/containers/${containerId}/exec`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `command=cat ${filePath}`,
    }
  );
  return contents.text();
};

export const saveFile = async (
  containerId: string,
  filePath: string,
  contents: string
) => {
  const response = await fetch(
    import.meta.env.VITE_BASE_URL + `/containers/${containerId}/exec`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `command=echo "${formatFileContents(contents)}" > ${filePath}`,
    }
  );

  return response;
};

export const executeCommands = async (command: string, containerId: string) => {
  const response = await fetch(
    import.meta.env.VITE_BASE_URL + `/containers/${containerId}/exec`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `command=${command}`,
    }
  );

  return response;
};
