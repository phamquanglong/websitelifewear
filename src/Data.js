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