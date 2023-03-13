import Button from '@/components/common/Button'
import Checkbox from '@/components/common/Checkbox'
import ModalCustom from '@/components/common/Modal'
import Select from '@/components/common/Select'
import { useState } from 'react'

const Home = () => {
  const [checkbox, setCheckbox] = useState<string[]>([])
  const listCheckbox = [
    {
      value: '1',
      label: 'tuanta1'
    },
    {
      value: '2',
      label: 'tuanta2'
    },
    {
      value: '3',
      label: 'tuanta3'
    }
  ]
  const handleChangeCheckbox = (value: string) => {
    setCheckbox([...value])
  }
  return (
    <div>
      <Select options={listCheckbox} />
    </div>
  )
}
export default Home
