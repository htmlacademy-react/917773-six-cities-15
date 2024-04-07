import { FC } from 'react';

type TSpinnerProps = {
  text?: string;
};

export const Spinner: FC<TSpinnerProps> = ({ text }) => (
  <div className="globe-container" style={{ margin: '0 auto' }}>
    <div className="globe">
      <div className="globe-sphere"></div>
      <div className="globe-outer-shadow"></div>
      <div className="globe-worldmap">
        <div className="globe-worldmap-back"></div>
        <div className="globe-worldmap-front"></div>
      </div>
      <div className="globe-inner-shadow"></div>
    </div>
    {text}
  </div>
);
