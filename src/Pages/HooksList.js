import React from 'react'

import Inc from '../components/Inc';
import Hover from '../components/Hover';
import Local from '../components/Local';
import Theme from '../components/Theme';
import Cookie from '../components/Cookie';
import Script from '../components/Script';
import CoolCards from '../components/CoolCards';

import { Mount } from '../components/Utilities';

const HooksList = () => {
  return (
    <main>
      <section>
        <Inc />
      </section>
      <section>
        <Local />
      </section>
      <section>
        <Hover />
      </section>
      <section>
        <Theme />
      </section>
      <section>
        <Cookie />
      </section>
      <section>
        <Script />
      </section>
      <section>
        <Mount />
      </section>
      <section>
        <CoolCards />
      </section>
    </main>
  );
};

export default HooksList;