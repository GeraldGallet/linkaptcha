import React, { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCheckLinkConfigurationProvider, useGetLinkConfigurationProvider } from '../hooks/useLinkProviders';
import { v4 } from 'uuid';

export const LinkPage: FC = () => {
  const params = useParams<{ token: string }>();
  const navigate = useNavigate();
  const { execute: checkConfiguration } = useCheckLinkConfigurationProvider();
  const { execute: getConfiguration } = useGetLinkConfigurationProvider();
  
  const [isValid, setIsValid] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [randomUUID, setRandomUUID] = useState(''); // State to hold the UUID

  useEffect(() => {
    const fetchData = async () => {
      if (!params.token) {
        navigate('/404'); // Redirect to /404 if token is undefined
        return;
      }

      const configExists = await checkConfiguration(params.token); // Await the check
      if (!configExists) {
        navigate('/404'); // Redirect to /404 if no configuration exists
        return;
      }

      setIsValid(true); // Set isValid to true if configuration exists
      setRandomUUID(v4()); // Generate a random UUID only once when the component mounts
    };

    fetchData(); // Call the async function
  }, [params.token]); // Ensure dependencies are correct

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue === randomUUID && params.token) {
      const config = await getConfiguration(params.token);
      if (config) {
        window.location.href = config.targetLink; // Redirect to targetLink
      }
    } else {
      alert("Incorrect UUID. Please try again.");
    }
  };

  if (!isValid) {
    return null; // Render nothing while checking validity
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Please enter the UUID: {randomUUID}
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}