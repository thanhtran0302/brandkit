const React = require('react');
const reactI18next = require('react-i18next');
const ENGLISH_COMMON = require(`../src/locales/en/common.json`);

const ENGLISH = {
  ...ENGLISH_COMMON
};

const hasChildren = node =>
  node && (node.children || (node.props && node.props.children));

const getChildren = node =>
  node && node.children ? node.children : node.props && node.props.children;

const renderNodes = reactNodes => {
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === 'string') {
      return child;
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child));
      return React.cloneElement(child, { ...child.props, key: i }, inner);
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce(
        (str, childKey) => `${str}${child[childKey]}`,
        ''
      );
    }

    return child;
  });
};

const useTranslationMock = (k, props) => {
  let str = ENGLISH[k];
  if (!str) return k;

  if (props) {
    const keys = Object.keys(props);
    const regex = /\$t\(([^)]+)\)/;

    Object.values(props).forEach((value, key) => {
      str = str.replace(`{{${keys[key]}}}`, value);
      const i18nKey = str.match(regex);
      if (i18nKey && i18nKey.length) {
        str = str.replace(regex, ENGLISH[i18nKey[1]]);
      }
    });
  }
  return str;
};

const useMock = [k => k, {}];
useMock.t = useTranslationMock;
useMock.i18n = {};

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => Component => props => (
    <Component t={k => k} {...props} />
  ),
  Trans: ({ children }) => renderNodes(children),
  Translation: ({ children }) => children(k => k, { i18n: {} }),
  useTranslation: () => useMock,

  // mock if needed
  I18nextProvider: reactI18next.I18nextProvider,
  initReactI18next: reactI18next.initReactI18next,
  setDefaults: reactI18next.setDefaults,
  getDefaults: reactI18next.getDefaults,
  setI18n: reactI18next.setI18n,
  getI18n: reactI18next.getI18n
};
