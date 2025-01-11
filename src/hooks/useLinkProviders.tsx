export const useGenerateLinkProvider = () => {
  type Input = { targetLink: string }
  type Output = { message: string, data: { targetLink: string; token: string } }

  const execute = async (input: Input): Promise<Output> => {
    const result = await fetch('http://localhost:3010/linkConfigurations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    if (!result.ok) {
      throw new Error('Failed to generate link configuration');
    }

    return await result.json();
  };

  return { execute };
};

export const useCheckLinkConfigurationProvider = () => {
  const execute = async (token: string) => {
    const response = await fetch(`http://localhost:3010/linkConfigurations/exists/${token}`);
    return response.ok; // Return true if configuration exists
  };

  return { execute };
};

export const useGetLinkConfigurationProvider = () => {
  const execute = async (token: string) => {
    const response = await fetch(`http://localhost:3010/linkConfigurations/${token}`);

    if (response.ok) {
      return response.json(); // Return the configuration
    }

    return null; // Return null if not found
  };

  return { execute };
};