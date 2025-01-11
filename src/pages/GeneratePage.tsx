import { FC, useState } from "react";
import { useGenerateLinkProvider } from "../hooks/useLinkProviders";

export const GeneratePage: FC = () => {
  const [link, setLink] = useState("");
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);
  const { execute: generateLink } = useGenerateLinkProvider();

  const handleGenerateLink = () => {
    generateLink({ targetLink: link }).then((data) => setGeneratedToken(data.data.token));
  };

  return (
    <div>
      {!generatedToken && (
        <div>
          <input 
          type="text" 
          value={link} 
          onChange={(e) => setLink(e.target.value)} 
          placeholder="Enter your link" 
          />
          <button onClick={handleGenerateLink}>Generate my safe link</button>
        </div>
      )}
      {generatedToken && (
        <div>
          <p>Your link is ready and can be found at:</p>
          <a href={`http://localhost:9000/link/${generatedToken}`}>
            http://localhost:9000/link/{generatedToken}
          </a>
        </div>
      )}
    </div>
  );
}