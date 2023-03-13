import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import ReactPaginate from 'react-paginate'

interface IProps {
  totalPage: number
  forcePage?: number
  onChange: any
}

const Paginate = (props: IProps) => {
  const { totalPage, onChange, forcePage = 1 } = props

  const handleChangePage = (page: any) => {
    onChange(page.selected + 1)
  }

  return (
    <>
      {totalPage > 1 && (
        <div className='flex justify-center mt-5'>
          <ReactPaginate
            nextLabel={<HiChevronLeft size='24' color='#292D32' />}
            previousLabel={<HiChevronRight size='24' color='#292D32' />}
            breakLabel='...'
            forcePage={forcePage - 1}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handleChangePage}
            containerClassName='flex items-center space-x-2'
            pageClassName='page-item rounded border border-gray-200 py-1 px-2'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakClassName='page-item '
            breakLinkClassName='page-link'
            activeClassName='text-white bg-primary py-1 px-2 rounded'
          />
        </div>
      )}
    </>
  )
}

export default Paginate
