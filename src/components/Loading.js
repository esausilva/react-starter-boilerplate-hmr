import React from 'react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <div class="fa-3x  d-flex justify-content-center"><i class="fa fa-spinner fa-spin"></i></div>;

export default ReactDelayRender({ delay: 2000 })(Loading);
