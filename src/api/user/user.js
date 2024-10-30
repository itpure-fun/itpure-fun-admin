import { request } from '@/utils/request.js'

/**
 * 用户表 API JS
 */

export default {

  /**
   * 获取用户表分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'user//index',
      method: 'get',
      params
    })
  },

  /**
   * 读取用户表
   * @returns
   */
  read (id) {
    return request({
      url: 'user//read/' + id,
      method: 'get'
    })
  },

  /**
   * 更改用户表数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'user//changeStatus',
      method: 'put',
      data
    })
  },


}