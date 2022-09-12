import React from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
};

function HeadInfo({ title }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default HeadInfo;
