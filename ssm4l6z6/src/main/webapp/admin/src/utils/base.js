const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm4l6z6/",
            name: "ssm4l6z6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm4l6z6/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "答题小程序"
        } 
    }
}
export default base
