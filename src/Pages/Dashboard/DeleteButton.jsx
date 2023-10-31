
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const DeleteButton = styled(Button)(() => ({
  backgroundColor: '#FCB41E',
  color: 'white',
  '&:hover': {
    backgroundColor: '#FCB41E !important',
  },
}));

export default DeleteButton;