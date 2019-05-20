import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_ko from 'react-intl/locale-data/ko';
import message_en from './locales/en.json';
import message_ko from './locales/ko.json';

addLocaleData([...locale_en, ...locale_ko]);
const Context = React.createContext();
const { Provider, Consumer: ConnectedIntlConsumer } = Context;

class ConnectedIntlProvider extends React.Component {
  constructor(props) {
    super(props);
    this.switchLocale = (locale) => {
      this.setState({
        locale: locale
      })
    };
    this.state = {
      locale: navigator.language.split(/[-_]/)[0],
      messages: {
        en: message_en,
        ko: message_ko
      },
      switchLocale: this.switchLocale
    };
  }

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      <Provider value={this.state}>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages[locale]}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </Provider>
    )
  }
}

export { ConnectedIntlProvider, ConnectedIntlConsumer };