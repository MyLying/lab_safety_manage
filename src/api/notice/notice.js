import { post } from '@/utils/request'

export function insert(data) {
  return post('/exam/api/notice/insert', data)
}

export function select() {
  return post('/exam/api/notice/select', {})
}

export function selectId(data) {
  return post('/exam/api/notice/selectId', data)
}
export function passIds(data) {
  return post('/exam/api/notice/passIds', data)
}
export function selectMark() {
  return post('/exam/api/notice/selectMark', {})
}
export function deleteId(data) {
  return post('/exam/api/notice/deleteId', data)
}

export function passDetailId(data) {
  return post('/exam/api/notice/passDetailId', data)
}

export function selectDetailId() {
  return post('/exam/api/notice/selectDetailId', {})
}
