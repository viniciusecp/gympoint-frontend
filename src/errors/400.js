import { toast } from 'react-toastify';

export default function status400(message) {
  switch (message) {
    case 'Student does not exists':
      return toast.error('Estudante não encontrado na base de dados!');
    case 'This student has active enrollment':
      return toast.error(
        'Este estudante possui matricula ativa! Favor excluir a matricula primeiro.'
      );
    default:
      return toast.error(
        'Houve um erro interno! Entre em contato com o administrador do sistema.'
      );
  }
}
