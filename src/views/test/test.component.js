export default {
    name: "Test",
    template: './test.html',
    data: function() {
        return {
            userData: {},
            types: ["appCodeName", "appName", "appVersion", "cookieEnabled", "geolocation", "language", "onLine", "platform", "product", "userAgent"],
            name: "--noname--"
        }
    },
    beforeMount() {
        this.types.forEach(e => {
            this.userData[e] = navigator[e];
        });
    }
}