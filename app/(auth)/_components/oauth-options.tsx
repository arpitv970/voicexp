import { OAuthGoogle } from "./oauth-google";

export const OAuthOptions = () => {
  return (
    <div className="grid grid-flow-col gap-2">
      <OAuthGoogle>Google</OAuthGoogle>
    </div>
  );
};
