import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './input.css'





const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 2,
    },
    '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    },
});


export default function CustomizedInputs(proms) {

    const { title, onChange, defaultValue } = proms;

    return (
        <Box
            className='input-box'
            component="form"
            noValidate
            sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr 1fr' },
                gap: 2,
            }}
        >
            <ValidationTextField
                label={title}
                required
                variant="outlined"
                id="validation-outlined-input"
                onChange={onChange}
                defaultValue={defaultValue}
            />
        </Box>
    );
}