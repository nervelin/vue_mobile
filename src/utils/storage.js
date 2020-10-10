/*
封装本地存储
*/
// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (value) => {
  try {
    return JSON.parse(window.localStorage.getItem(value))
  } catch (error) {
    return value
  }
}

// 删除数据
export const removeItem = key => {
  window.localStorage.removeItem(key)
}
