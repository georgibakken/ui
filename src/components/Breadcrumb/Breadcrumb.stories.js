import React from 'react';

import markdown from './README.mdx';

import Breadcrumb from '.';
import BreadcrumbHome from '../BreadcrumbHome';
import BreadcrumbItem from '../BreadcrumbItem';
import BreadcrumbSkeleton from '../Breadcrumb/Breadcrumb.Skeleton';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbHome, BreadcrumbItem },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const BreadcrumbRegular = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem>
      <a href="/#">
        <BreadcrumbHome />
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem>
  </Breadcrumb>
);
