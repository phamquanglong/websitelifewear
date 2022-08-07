import axios from "axios";

var domain = "http://localhost:8000";

export var getBanner = (setValue, setIsLoading) => {
  const options = { method: "GET", url: `${domain}/api/banners` };

  axios
    .request(options)
    .then(function (response) {
      var arr = [];
      response.data.map((item) =>
        arr.push({
          url: item.image,
        })
      );
      setValue(arr);
    })
    .then(() => setIsLoading(false))
    .catch(function (error) {
      console.error(error.response.data);
    });
};

export var getProducts = (setProductsList, setIsLoading, id) => {
  const options = {
    method: "GET",
    url: `${domain}/api/categories/${id}`,
    params: { "": "" },
  };

  axios
    .request(options)
    .then(function (response) {
      setProductsList(response.data);
    })
    .then(() => setIsLoading(false))
    .catch(function (error) {
      console.error(error.response.data);
    });
};

export var filter = (size, color, rangePrice, order, setDataList, id) => {
  console.log({ size, color, rangePrice, order });
  const options = {
    method: "GET",
    url: `${domain}/api/categories/${id}`,
    params: {
      size: size,
      color: color,
      price_min: rangePrice[0],
      price_max: rangePrice[1],
      sortby: "price",
      order: order,
    },
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      setDataList(response.data.products.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export var getCategories = (setCategories, setCategoriesOld) => {
  const options = {
    method: "GET",
    url: `${domain}/api/categories`,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      setCategories(response.data);
      setCategoriesOld(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export var getSearch = (value, setProductsList, setIsLoading) => {
  const options = {
    method: "GET",
    url: `${domain}/api/products/search`,
    params: { q: value },
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      setProductsList(response.data);
      setIsLoading(false);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export var getDetails = (id, setDetails, setIsLoading) => {
  const options = {
    method: "GET",
    url: `${domain}/api/products/${id}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setDetails(response.data);
      setIsLoading(false);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export var getReviews = (id, setReviews, setIsLoading) => {
  const options = {
    method: "GET",
    url: `${domain}/api/products/${id}/reviews`,
  };

  axios
    .request(options)
    .then(function (response) {
      setReviews(response.data);
      setIsLoading(false);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// API Login
export var login = (email, password, navigate) => {
  const options = {
    method: "POST",
    url: `${domain}/api/login`,
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    data: { email: email, password: password, device_name: "Window" },
  };

  axios
    .request(options)
    .then(function (response) {
      localStorage.setItem("token", response.data.token);
    })
    .then(() => navigate("/"))
    .catch(function (error) {
      console.error(error.response.data);
      alert("Mật khẩu hoặc địa chỉ email không chính xác, Vui lòng nhập lại");
    });
};

// API Info
export var getInfo = (token, setInfo) => {
  const options = {
    method: "GET",
    url: `${domain}/api/user`,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setInfo(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
    });
};

export let updateInfo = (token, value, setInfo, toast) => {
  const options = {
    method: "PATCH",
    url: `${domain}/api/user`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: value,
  };

  axios
    .request(options)
    .then(function (response) {
      setInfo(response.data);
      alert("Cập nhật thành công!!!");
    })
    .catch(function (error) {
      console.error(error.response.data);
      alert(error.response.data.message);
    });
};

// API Register
export var register = (
  first_name,
  last_name,
  email,
  password,
  gender,
  navigate
) => {
  const options = {
    method: "POST",
    url: `${domain}/api/register`,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    data: {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      gender: gender === "Nam" ? true : false,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      alert("Đăng ký thành công!!!");
    })
    .then(() => navigate("/Login"))
    .catch(function (error) {
      console.error(error.response.data);
      alert(error.response.data.message);
    });
};

// API Wishlist
export var addToWishlist = (token, id, setWishlist) => {
  const options = {
    method: "POST",
    url: `${domain}/api/user/wishlist`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    data: { product_id: id },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setWishlist(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
      alert("Sản phẩm đã có trong danh sách yêu thích");
    });
};

export var getWishlist = (token, setWishlist) => {
  const options = {
    method: "GET",
    url: `${domain}/api/user/wishlist`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setWishlist(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
    });
};

export var deleteWishlist = (token, id, setWishlist) => {
  const options = {
    method: "DELETE",
    url: `${domain}/api/user/wishlist/${id}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setWishlist(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// API Cart
export var addToCart = (token, id, quantity, setCart) => {
  const options = {
    method: "POST",
    url: `${domain}/api/user/cart`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    data: { product_variant_id: id, quantity: quantity },
  };

  axios
    .request(options)
    .then(function (response) {
      setCart(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
      alert("Sản phẩm đã có trong giỏ hàng");
    });
};

export var deleteCart = (token, id, setCart) => {
  const options = {
    method: "DELETE",
    url: `${domain}/api/user/cart/${id}`,
    headers: { Authorization: "Bearer " + token },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setCart(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
    });
};

export var getCart = (token, setCart) => {
  const options = {
    method: "GET",
    url: `${domain}/api/user/cart`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setCart(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
    });
};

export let updateQuantity = (token, id, quantity, setData) => {
  const options = {
    method: "PUT",
    url: `${domain}/api/user/cart/${id}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    data: { quantity: quantity },
  };

  axios
    .request(options)
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
    });
};

// API Subdivisions
export let getSubdivisions = (division_name, division_id, setData) => {
  const options = {
    method: "GET",
    url: `${domain}/api/addresses/child_divisions`,
    params: { division_name: division_name, division_id: division_id },
  };

  axios
    .request(options)
    .then(function (response) {
      var arr = [];
      response.data.map((item) =>
        arr.push({
          label: item.name,
          id: item.id,
        })
      );
      setData(arr);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// API Upload Avatar
export let uploadAvatar = (token, url) => {
  const form = new FormData();
  form.append("image", url);

  const options = {
    method: "POST",
    url: `${domain}/api/user/avatar`,
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    data: form,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
    });
};

// API Forget Password
export let getResetCode = (email) => {
  const options = {
    method: "POST",
    url: `${domain}/api/forgot`,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    data: { email: email },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error.response.data);
      error.response.data.errors !== undefined &&
        alert(error.response.data.errors.email);
    });
};
