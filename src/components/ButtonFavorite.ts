import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';

export const ButtonFavorite = styled(LoadingButton)(({ theme }) => ({
    border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    borderRadius: theme.spacing(.5),
    color: theme.palette.textButtonSecondary.main,
    width: '100%',
    padding: theme.spacing(1, 2.2),
    '& svg path':{
        fill: theme.palette.secondary.main
    },
    '&:hover':{
        border: `${theme.spacing(.3)} solid ${theme.palette.borderPrimary.main}`,
    }
}))

