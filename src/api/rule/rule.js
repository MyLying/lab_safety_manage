import { post } from '@/utils/request'

export function insert(data) {
  return post('/exam/api/rule/insert', data)
}

export function select() {
  return post('/exam/api/rule/select', {})
}

export function selectId(data) {
  return post('/exam/api/rule/selectId', data)
}
export function passIds(data) {
  return post('/exam/api/rule/passIds', data)
}
export function selectMark_rule() {
  return post('/exam/api/rule/selectMark', {})
}
export function deleteId(data) {
  return post('/exam/api/rule/deleteId', data)
}

export function passRuleDetailId(data) {
  return post('/exam/api/rule/passDetailId', data)
}

export function selectDetailId() {
  return post('/exam/api/rule/selectDetailId', {})
}
