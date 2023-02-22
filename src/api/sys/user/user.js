import { download, post } from '@/utils/request'
import { upload } from '@/utils/request'

export function updateData(data) {
  return post('/exam/api/sys/user/update', data)
}

export function saveData(data) {
  return post('/exam/api/sys/user/save', data)
}

export function userReg(data) {
  return post('/exam/api/sys/user/reg', data)
}

export function test(data) {
  return post('/exam/api/sys/user/test', data)
}

/**
 * 导出
 * @param data
 */
export function importExcel(file) {
  return upload('/exam/api/sys/user/excel', file)
}

/**
 * 导入模板
 * @param data
 */
export function importTemplate() {
  return download('/exam/api/sys/user/template', {}, '学生导入模板.xlsx')
}
