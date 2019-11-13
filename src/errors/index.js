import status400 from './400';

export default function showError(status, message) {
  switch (status) {
    case 400: {
      status400(message);
      break;
    }
    default:
  }
}
