import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import HeaderComponent from "../components/HeaderComponent";
import RestaurentDetails from "../components/RestaurentDetails";
import DUMMY_RESTAURENT_ITEMS_DETAILS from "../mock/dummy_data/dummy_restaurentItemsDetails";
import store from "../utils/store";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(DUMMY_RESTAURENT_ITEMS_DETAILS),
  });
});

test("Cart items added in restaurent page -> count added to header and items to cart Page", async () => {
  const testcomponent = render(
    <StaticRouter>
      <Provider store={store}>
        <HeaderComponent />
        <RestaurentDetails />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() =>
    expect(testcomponent.getByTestId("restaurentItems-list"))
  );
  const addToCart = testcomponent.getAllByTestId("add-to-cart");
  [1, 2, 3].forEach((indx) => fireEvent.click(addToCart[indx]));
  expect(testcomponent.getByTestId("cart-items-count").textContent).toBe("3");
  expect(testcomponent.getByTestId("items-in-cart").children.length).toBe(3);
});

test("Cart items added in Restaurent items page -> added to the cart items Page", async() => {
  const testComponent = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurentDetails />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() =>
  expect(testComponent.getByTestId("restaurentItems-list"))
);
const addToCart = testComponent.getAllByTestId("add-to-cart");
const addMore = testComponent.getAllByTestId("add-one-to-cart");
// [1,2,3,4].forEach((idx)=>fireEvent.click(addToCart[idx]));
// [1].forEach((idx)=>fireEvent.click(addMore[idx]));

expect(testComponent.getByTestId("items-in-cart").children.length).toBe(4);

});
