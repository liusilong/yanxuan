let utilFunc = {
    setBundleUrl(_url) {
        let baseUrl = "http://192.168.31.220:8081/dist";
        let url = `${baseUrl}${_url}`
        return url;
    }
};
export default utilFunc;