import test from 'ava'
import Dec64 from './dec64'

test('set and read Integer value', t => {
    const num = new Dec64(5)
    t.is(num.value, 5)
})

test('set and read Float value', t => {
    const num = new Dec64(5.2)
    t.is(num.value, 5.2)
})