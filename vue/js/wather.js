var appWeather = new Vue({
    el: '#app-weather',
    data: {
        city: '',
        forecast: []
    },
    methods: {
        searchWeather: function() {
            var that = this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
                .then(function(response) {
                    console.log(response.data.data.forecast);
                    that.forecast = response.data.data.forecast;
                }).catch(function(err) {
                    console.log(err);
                })
        },
        changeCity: function(city) {
            this.city = city;
            this.searchWeather();
        }
    }

})