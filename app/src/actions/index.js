import axios from "axios";

export const FETCH_BEER_START = "FETCH_BEER_START";
export const FETCH_BEER_SUCCESS = "FETCH_BEER_SUCCESS";
export const FETCH_BEER_FAIL = "FETCH_BEER_FAIL";

export const fetchData = () => (dispatch) => {
  dispatch({
    type: FETCH_BEER_START,
  });
  axios
    .get("https://api.punkapi.com/v2/beers?ibu_lt=48&ibt_gt=9&per_page=80")
    .then((res) =>
      dispatch({ type: FETCH_BEER_SUCCESS, payload: res.data })
    )
    .catch((e) =>
      dispatch({
        type: FETCH_BEER_FAIL,
        payload: `${e}`,
      })

    );
};
