import { message } from 'antd';

export default action => {

    const { msg = '网络错误', code } = action.payload;

    if(code === 401) {
        console.log(401);
    }

    message.error(msg);
}