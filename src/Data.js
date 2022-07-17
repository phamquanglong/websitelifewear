import axios from "axios";

var domain = "https://api.lifewear.mn07.xyz"

export var getBanner = (setValue, setIsLoading) => {
    const options = {method: 'GET', url: `${domain}/api/banners`};

    axios.request(options).then(function (response) {
        var arr = []
        response.data.map(item => arr.push({
            url: item.image
        }))
        setValue(arr)
    })
    .then(() => setIsLoading(false))
    .catch(function (error) {
        console.error(error.response.data);
    });
}

export var getProducts = (setProductsList, setIsLoading, id) => {
    const options = {
        method: 'GET',
        url: `${domain}/api/categories/${id}`,
        params: {'': ''}
      };
      
      axios.request(options).then(function (response) {
        setProductsList(response.data)
      })
      .then(() => setIsLoading(false))
      .catch(function (error) {
        console.error(error.response.data);
      });
}

export var filter = (size, color, rangePrice, order, setDataList, id) => {
  console.log({size, color, rangePrice, order})
  const options = {
    method: 'GET',
    url: `${domain}/api/categories/${id}`,
    params: {
      size: size, 
      color: color, 
      price_min: rangePrice[0],
      price_max: rangePrice[1],
      sortby: 'price', 
      order: order},
    headers: {'Content-Type': 'application/json', Accept: 'application/json'}
  };
  
  axios.request(options).then(function (response) {
    setDataList(response.data.products.data)
  }).catch(function (error) {
    console.error(error);
  });
}

export var getCategories = (setCategories, setCategoriesOld) => {
  const options = {
    method: 'GET',
    url: `${domain}/api/categories`,
    headers: {'Content-Type': 'application/json', Accept: 'application/json'}
  };
  
  axios.request(options).then(function (response) {
    setCategories(response.data)
    setCategoriesOld(response.data)
  }).catch(function (error) {
    console.error(error);
  });
}

export var getSearch = (value, setProductsList, setIsLoading) => {
  const options = {
    method: 'GET',
    url: `${domain}/api/products/search`,
    params: {q: value},
    headers: {'Content-Type': 'application/json', Accept: 'application/json'}
  };
  
  axios.request(options).then(function (response) {
    setProductsList(response.data)
    setIsLoading(false)
  }).catch(function (error) {
    console.error(error);
  });
}

export var getDetails = (id, setDetails, setIsLoading) => {
  const options = {
    method: 'GET',
    url: `${domain}/api/products/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  };
  
  axios.request(options).then(function (response) {
    setDetails(response.data)
    setIsLoading(false)
  }).catch(function (error) {
    console.error(error);
  });
}

export var getReviews = (id, setReviews, setIsLoading) => {
  const options = {
    method: 'GET',
    url: `${domain}/api/products/${id}/reviews`,
  };
  
  axios.request(options).then(function (response) {
    setReviews(response.data)
    setIsLoading(false)
  }).catch(function (error) {
    console.error(error);
  });
}