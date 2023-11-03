import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonRoute = styled(Button)(({theme}) => ({
    borderRadius: theme.spacing(.5),
    width: '100%',
    padding: theme.spacing(1.25, 2.2),
}))