/**
 * Created by Kim on 2018/5/23.
 */

/**
 * basic transformation function
 */
const processContact = contact => ({
    name: `${contact.name.first} ${contact.name.last}`,
    phone: contact.phone,
})

const addKeys = (val, key) => ({key: key + '', ...val})

/**
 * 异步调用 查询用户数据
 * @returns {Promise.<void>}
 */
export const fetchUsers = async () => {
    /**
     * (async () => {
         * })()
     * an immediately-invoked function expression
     * 一个立即调用（即时调用）的函数表达式
     * 创建一个匿名方法 直接调用 使用async关键字 异步调用
     * () => {} 箭头表达式绑定this
     */
    const response = await fetch('https://randomuser.me/api/?results=20')
    // destructuring 解构对象
    const {results} = await response.json();
    console.log(results);
    // 处理结果集
    // same as return results.map(contact => processContact(contact));
    return results.map(processContact);
}

/**
 * 异步调用 登录
 * @returns {Promise.<void>}
 */
export const login = async (username, password) => {
    console.log(username, password);
    const response = await fetch('http://192.168.0.5:3000', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
    console.log(response);
    /**
     * 登录成功
     */
    if (response.ok) {
        // const json = await response.json();
        const {token} = await response.json();
        return token
    }
    /**
     * 等待一个异步方法执行完成 返回错误信息
     */
    const errMessage = await response.text()
    throw new Error(errMessage);
}