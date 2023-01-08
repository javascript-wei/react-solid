// 临时写的正则，校验可能不准
export const isEmail = (value: string) => {
  return /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/.test(value);
}
// 临时写的正则，校验可能不准
export const isTelephone = (value: string) => {
  return /^[1][3,4,5,7,8][0-9]{9}$/.test(value);
}

/**
 * 整合校验
 * @param validName 校验的名字
 * @param message 校验不通过提示文案
 * @param options 校验方法配置参数 https://ant-design.gitee.io/components/form-cn#rule
*/

export const buildAntd4FormValidator = (
  validName: 'isEmail' | 'isTelephone',
  message: string,
  options: any = {},
) => {
  const validMap = {
    isEmail,
    isTelephone
  }
  return {
    validator(_rule, value: string, cb: (value?: string) => void) {
      if (!value) {
        cb();
      } else {
        if (validMap[validName](value)) {
          cb();
        } else {
          cb(message || 'Invalid field value')
        }
      }
    },
    ...options,
  }
}

export const buildAntd4FormValidator1 = (
  validFun: (value: string) => boolean,
  message: string,
  options: any = {},
) => {
  return {
    validator(_rule, value: string, cb: (value?: string) => void) {
      if (!value) {
        cb();
      } else {
        if (validFun(value)) {
          cb();
        } else {
          cb(message || 'Invalid field value')
        }
      }
    },
    ...options,
  }
}
