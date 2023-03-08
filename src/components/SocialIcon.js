import React from 'react';
import {
  TiSocialTwitter, TiSocialFacebook, TiSocialGooglePlus, TiSocialVimeo, TiSocialPinterest,
} from 'react-icons/ti';

function SocialIcon() {
  return (
    <div className="social-logo">
      <a className="social-link" href="google.com" target="_blank">
        <TiSocialTwitter size={25} />
      </a>
      <a className="social-link" href="google.com" target="_blank">
        <TiSocialFacebook size={25} />
      </a>
      <a className="social-link" href="google.com" target="_blank">
        <TiSocialGooglePlus size={25} />
      </a>
      <a className="social-link" href="google.com" target="_blank">
        <TiSocialVimeo size={25} />
      </a>
      <a className="social-link" href="google.com" target="_blank">
        <TiSocialPinterest size={25} />
      </a>
    </div>
  );
}

export default SocialIcon;
