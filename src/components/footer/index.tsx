import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import Trans from 'next-translate/Trans';
import { useRecoilValue } from 'recoil';
import FooterLogoLight from '@assets/evt-logo-white.png';
import FooterLogoDark from '@assets/evt-logo-black.png';
import {
  Typography,
} from '@material-ui/core';
import {
  generalConfig,
} from '@src/configs';
import { readTheme } from '@recoil/settings/selectors';
import { useStyles } from './styles';

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  const theme = useRecoilValue(readTheme);

  // ============================
  // Footer
  // ============================

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classnames('footer')}>
        {/* ============================= */}
        {/* logo */}
        {/* ============================= */}
        <div className="footer__logo--container">
          {theme === 'light' ? (
            <Image
              src={FooterLogoDark}
              width="50px"
              height="50px"
            />
          ) : (
            <Image
              className="footer__logo"
              src={FooterLogoLight}
              width="50px"
              height="50px"
            />
          )}
        </div>
        {/* ============================= */}
        {/* links */}
        {/* ============================= */}
        <Typography className="footer__closing--text">
          <Trans
            i18nKey="common:maintainBy"
            components={[
              (
                // eslint-disable-next-line
                <a target="_blank" rel="noreferrer" href={generalConfig.maintainer.url} />
              ),
            ]}
            values={{
              name: generalConfig.maintainer.name,
            }}
          />
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
