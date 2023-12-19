import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import BigDipperLogoWhite from '@assets/evt-logo-white.png';
import BigDipperLogoRed from '@assets/evt-logo-black.png';
import { LinearProgress } from '@material-ui/core';
import { readTheme } from '@recoil/settings';
import { useStyles } from './styles';


const InitialLoad = () => {
  const theme = useRecoilValue(readTheme);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {theme === 'light' ? (
          <Image
            src={BigDipperLogoRed}
            width="200px"
            height="200px"
          />
        ) : (
          <Image
            src={BigDipperLogoWhite}
            width="200px"
            height="200px"
          />
        )}
        <LinearProgress className={classes.divider} />
      </div>
    </div>
  );
};

export default InitialLoad;
