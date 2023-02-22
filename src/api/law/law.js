import { post } from '@/utils/request'

export function insert(data) {
  return post('/exam/api/law/insert', data)
}

export function select() {
  return post('/exam/api/law/select', {})
}

export function selectId(data) {
  return post('/exam/api/law/selectId', data)
}
export function passIds(data) {
  return post('/exam/api/law/passIds', data)
}
export function selectMark_law() {
  return post('/exam/api/law/selectMark', {})
}
export function deleteId(data) {
  return post('/exam/api/law/deleteId', data)
}

export function passLawDetailId(data) {
  return post('/exam/api/law/passDetailId', data)
}

export function selectDetailId() {
  return post('/exam/api/law/selectDetailId', {})
}
