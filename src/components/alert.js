import Swal from 'sweetalert2';

export const ALERTTYPE = Object.freeze({
  add: 'add',
  remove: 'remove',
});

const sweetAlert = type => {
  switch (type) {
    case ALERTTYPE.add:
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '장바구니에 담았습니다!',
        showConfirmButton: false,
        timer: 1000,
      });
      break;
    case ALERTTYPE.remove:
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '장바구니에서 제거했습니다!',
        showConfirmButton: false,
        timer: 1000,
      });
      break;
    default:
      break;
  }
};

export default sweetAlert;
