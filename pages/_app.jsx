import { Provider } from "react-redux";
import { wrapper } from "redux/store";
import "styles/reset.css";
import "styles/style.css";

export default function MyApp({ Component, ...pageProps }) {
  // Use the layout defined at the page level, if available
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
