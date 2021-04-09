/* --mock 2021/3/11 @王浩然QQ378237242 -- */
import Mock from "mockjs"

Mock.setup({
    timeout: '200-700'
})

Mock.mock("mock/userlist", {
    code: 0,
    total: 100,
    'data|20': [
        {
            "name": '@cname',
            "phone|10000000000-19999999999": 19999999999,
            "address": '@city(true)',
            "email": '@email',
        },
    ]
})
