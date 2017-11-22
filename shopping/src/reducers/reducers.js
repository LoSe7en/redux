//创建默认配置文件
let options = {
    isLoading: false
};

//使用es6语法，state参数没值时默认等于options
const reducersApp = function(state=options, action) {
    switch(action.type) {
        default:
            return {
                ...state
            }
    }
};

export default reducersApp;