import { useEffect, useState } from "react";

function useCurrancyInfo(currency) {
  const [data, setData] = useState({});
  let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
  useEffect(() => {

      fetch(`${apiUrl}`)
      .then((res) => res.json())
      .then((res) => {setData(res[currency])})
      // console.table(data)
  }, [currency])
//   console.log("Api url: ", apiUrl);
  return data;
}

export default useCurrancyInfo;
