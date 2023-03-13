import Button from '@/components/common/Button'
import { ReactNode } from 'react'
import { HiXMark } from 'react-icons/hi2'
import Modal from 'react-modal'
Modal.setAppElement('#root')
const styles = {
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(206, 206, 206, 0.7)',
    zIndex: 11
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '16px'
  }
}
interface ModalProps {
  isOpen: boolean
  toggleOpen: (e: any) => void
  children?: ReactNode
  className?: string
  title?: string
  footer?: ReactNode
  classNameTitle?: string
  onSubmit?: () => void
}
const ModalCustom = ({
  isOpen,
  toggleOpen,
  children,
  className,
  footer,
  classNameTitle,
  onSubmit,
  title
}: ModalProps) => {
  const footerDefault = (
    <div className='flex items-center justify-end pt-5 space-x-2 border-t border-gray-200 rounded-b'>
      <Button variant='outline-light' onClick={toggleOpen}>
        Cancel
      </Button>
      <Button onClick={onSubmit}>I accept</Button>
    </div>
  )
  return (
    <Modal
      isOpen={isOpen}
      style={styles}
      onRequestClose={toggleOpen}
      className={
        'bg-white border space-y-3 border-gray-200 outline-none rounded absolute w-1/2 p-7 ' +
        className
      }
    >
      <div className='flex justify-between pb-5 border-b border-gray-200'>
        <div>
          {title && (
            <p
              className={
                'text-xl font-semibold text-gray-900 ' + classNameTitle
              }
            >
              {title}
            </p>
          )}
        </div>
        <HiXMark className='cursor-pointer' onClick={toggleOpen} />
      </div>
      <div>{children}</div>
      {footer ? footer : footerDefault}
    </Modal>
  )
}

export default ModalCustom
