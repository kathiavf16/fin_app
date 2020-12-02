

import React from 'react';

import {Helmet} from "react-helmet";

class Calculador extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
            <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>

<iframe width=560 height=349 src=https://player.cnbc.com/p/gZWlPC/cnbc_global?playertype=synd&byGuid=7000065026 frameborder=0 scrolling=no allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen ></iframe>
            </Helmet>
            ...
        </div>
    );
  }
};


export default Calculador;
