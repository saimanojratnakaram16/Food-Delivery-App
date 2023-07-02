import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import BodyComponent from "../components/BodyComponent";
import store from "../utils/store";
import DUMMY_RESTAURENT_DATA from "../mock/dummy_data/dumy_restaurentData";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>Promise.resolve(DUMMY_RESTAURENT_DATA),
    });
});

test("Shimmer should load on HomePage", ()=>{
    const body = render(
        <StaticRouter>
          <Provider store={store}>
            <BodyComponent />
          </Provider>
        </StaticRouter>
      );
      const shimmer = body.getByTestId("shimmer-cards");
      expect(shimmer.children.length).toBe(15);
});

test("Search Results on home page", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <BodyComponent />
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=>expect(body.getByTestId("search-input")));

  const searchInp = body.getByTestId("search-input");

  fireEvent.change(searchInp, {
    target:{
        value: "sri"
    }
  });

  const searchBtn = body.getByTestId("search-btn");

  fireEvent.click(searchBtn);

  const restaurantsList = body.getByTestId("restaurants-list");

  expect(restaurantsList.children.length).toBe(3); 

});
