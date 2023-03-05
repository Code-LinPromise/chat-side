import axios from "axios"
export const baseUrl="https://www.clueai.cn/modelfun/api/serving_api"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Model-name'] = 'clueai-base';
export const getData=axios.post(baseUrl,{
    task_type:"classify",
    task_name:"产品分类",
    input_data:["强大图片处理器"],
    labels:["美颜", "二手", "外卖", "办公", "求职"]
})


