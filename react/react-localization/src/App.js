import "./App.css";

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messages = {
  "tr-TR": {
    title: "Merhaba Dunya!",
    description: "{count} yeni mesajiniz var.",
  },
  "en-US": {
    title: "Hello World!",
    description: "You have {count} new messages.",
  },
};

function App() {
  const defaultLocale = localStorage.getItem("locale") || navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title" />

        <p>
          <FormattedMessage id="description" values={{ count: 13 }} />
        </p>

        <br />
        <br />

        <button onClick={() => setLocale("tr-TR")}>Tr</button>
        <button onClick={() => setLocale("en-US")}>En</button>
      </IntlProvider>
    </div>
  );
}

export default App;
