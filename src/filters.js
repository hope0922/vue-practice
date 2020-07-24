//全局filter

import moment from 'moment'

export const dateFormat = (v, style = 'YYYY-MM-DD HH:mm:ss') => {
  return moment(v).format(style)
}