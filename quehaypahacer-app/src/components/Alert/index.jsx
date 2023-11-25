import swal from 'sweetalert2'

export const ALERT_ICON = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  QUESTION: 'question'
}


export const Alert = ({
  icon= ALERT_ICON.INFO,
  tittle = '',
  text = ''
}) =>{
  swal.fire({
    icon,
    tittle,
    text
  })
}