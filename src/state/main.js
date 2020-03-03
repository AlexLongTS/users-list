import {
  post
} from 'httpie'
import {
  advancedWritable
} from '/state/advancedWritable'

export const postAPI = async (func, payload) => {
  try {
    const r = await post({
      func
    }, {
      body: {
        payload
      }
    })
    return r.data;
  } catch (error) {
    console.error(error && (error.data || error));
    return {
      ...error.data
    };
  }
}