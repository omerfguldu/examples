import "./App.css";

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import { StyledButton } from "styled-button-elements";
import "styled-button-elements/dist/index.css";

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

        <StyledButton type="primary" onClick={() => setLocale("tr-TR")}>
          Tr
        </StyledButton>
        <StyledButton type="default" onClick={() => setLocale("en-US")}>
          En
        </StyledButton>
      </IntlProvider>
    </div>
  );
}

export default App;
