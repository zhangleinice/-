import { message } from 'antd';

export default action => {

    const { msg = '网络错误', status } = action.payload;

    if(status === 200){
        message.success('nice')
    }

    if(status === 401) {
        message.error(msg);
    }

    // message.error(msg);
}