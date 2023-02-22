import { post } from '@/utils/request'

export function insert(data) {
  return post('/exam/api/safe/insert', data)
}

export function select() {
  return post('/exam/api/safe/select', {})
}

export function selectId(data) {
  return post('/exam/api/safe/selectId', data)
}
export function passIds(data) {
  return post('/exam/api/safe/passIds', data)
}
export function selectMark_safe() {
  return post('/exam/api/safe/selectMark', {})
}
export function deleteId(data) {
  return post('/exam/api/safe/deleteId', data)
}

export function passSafeDetailId(data) {
  return post('/exam/api/safe/passDetailId', data)
}

export function selectDetailId() {
  return post('/exam/api/safe/selectDetailId', {})
}
