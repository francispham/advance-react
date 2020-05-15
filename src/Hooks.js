import React from 'react'

import Inc from './components/Inc';
import Local from './components/Local';
import Hover from './components/Hover';
import Theme from './components/Theme';
import Cookie from './components/Cookie';
import Script from './components/Script';

import { Mount } from "./components/Utilities";

const Hooks = () => {
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
    </main>
  );
};

export default Hooks;