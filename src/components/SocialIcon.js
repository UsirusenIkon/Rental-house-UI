import React from 'react';
import {
  TiSocialLinkedin,
} from 'react-icons/ti';

import {
  VscGithub, VscGlobe,
} from 'react-icons/vsc';

function SocialIcon() {
  return (
    <div className="">
      <a className="social-link" href="google.com" target="_blank">
        <VscGithub size={20} />
      </a>
      <a className="social-link" href="google.com" target="_blank">
        <VscGlobe size={20} />
      </a>
      <a className="social-link" href="google.com" target="_blank">
        <TiSocialLinkedin size={20} />
      </a>
    </div>
  );
}

export default SocialIcon;
