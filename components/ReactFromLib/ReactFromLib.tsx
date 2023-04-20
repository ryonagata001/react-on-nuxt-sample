import { GuestReservation } from '@CHILLNN-Inc/chillnn-driver-reservation-ui-react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n.config';

const ReactFromLib = () => {
  const Provider = I18nextProvider as any;
  return (
      <Provider i18n={i18n}>
        <GuestReservation message='Hello World!' />
      </Provider>
  )
}

export default ReactFromLib;
