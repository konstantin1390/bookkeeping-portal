import React from 'react';
import AppModule from '../client/modules/appModule/appModule';
import FileBoxModule from '../client/modules/fileBoxModule/FileBoxModule';
import TasksModule from '../client/modules/tasksModule/TasksModule';
import MailModule from '../client/modules/mailModule/MailModule';

export default {
  component: AppModule,
  routes: [
    {
      path: '/tasks',
      exact: true,
      component: TasksModule,
    },
    {
      path: '/file_box',
      exact: true,
      component: FileBoxModule,
    },
    {
      path: '/mail',
      exact: true,
      component: MailModule,
    },
    {
      path: '*',
      component: () => <p>Error404</p>,
    },
  ],
};
