import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("check for logo load in the header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
      </Provider>
    </StaticRouter>
  );
  const logo = header.queryAllByTestId('site-logo');
    expect(logo[0].src).toBe('http://localhost/dummyLogo.png');
});

test("Cart should have 0 items", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <HeaderComponent />
        </Provider>
      </StaticRouter>
    );
    const cartData = header.queryByTestId('Cart-data');
      expect(cartData.innerHTML).toBe('Cart');
  });
