const base = {
    get() {
        return {
            url : "http://localhost:8080/kaoshixitong/",
            name: "kaoshixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kaoshixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "考试系统"
        } 
    }
}
export default base
