import React from 'react'
import {Box, createTheme, Slider, ThemeProvider} from '@mui/material';

type SuperDoubleRangePropsType = {
    onChangeRange?: (event: Event, newValue: number | number[]) => void
    value: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const theme = createTheme({
        palette: {
            primary: {
                main: '#a2e0fd',
            },
            secondary: {
                main: '#385d8c',
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{width: 150, marginLeft: 2, marginRight: 2, display: 'inline-flex'}}>
                    <Slider
                        value={value}
                        onChange={onChangeRange}
                        valueLabelDisplay="auto"
                        color={'secondary'}
                    />
                </Box>
            </ThemeProvider>
        </>
    )
}

export default SuperDoubleRange