import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    // const [value1, setValue1] = useState(0)
    // const [value2, setValue2] = useState(100)
    const [value, setValue] = useState<number[]>([0, 100]);

    const handleOne = (newValue: number) => {
        setValue((value) => {
            const copy = [...value];
            copy[0] = newValue
            return copy
        })
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{display: 'flex', alignItems: 'center', color: '#385d8c', fontWeight: 'bold'}}>
                <span>{value[0]}</span>
                <SuperRange value={value[0]}
                            onChangeRange={handleOne}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display: 'flex', alignItems: 'center', color: '#385d8c', fontWeight: 'bold'}}>
                <span>{value[0]}</span>
                <SuperDoubleRange
                    value={value}
                    onChangeRange={handleChange}

                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
