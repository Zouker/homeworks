import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {Box, createTheme, Slider, ThemeProvider} from '@mui/material';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (newValue: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        // type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        // onChange,
        // className,
        value,
        onChangeRange,
        // ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (event: Event, value: number | number[]) => {
        if (typeof value === 'number') {
            onChangeRange(value)
        }
        // onChange && onChange(event) // сохраняем старую функциональность
        // onChangeRange && onChangeRange(value)
    }

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

    // const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box width={150} marginLeft={2} marginRight={2} display={'inline-flex'}>

                    <Slider
                        value={value}
                        onChange={onChangeCallback}
                        valueLabelDisplay="auto"
                        color={'secondary'}
                    />
                </Box>
            </ThemeProvider>
            {/*<input*/}
            {/*    value={value}*/}
            {/*    type={'range'}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    className={finalRangeClassName}*/}

            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
        </>
    )
}

export default SuperRange
