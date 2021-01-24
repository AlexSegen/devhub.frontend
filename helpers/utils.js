import moment from 'moment'

export const formatDate = (date = new Date(), format = 'MMMM Do YYYY, h:mm:ss a') => {
  return moment(date).format(format)
};
