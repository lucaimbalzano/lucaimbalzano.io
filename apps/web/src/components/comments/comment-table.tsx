import { Table } from '@simbashrd/ui'
import { cn } from '@simbashrd/utils'

type CommentTableProps = React.ComponentProps<'table'>

const CommentTable = (props: CommentTableProps) => {
  const { className, ...rest } = props

  return <Table className={cn('not-prose my-2', className)} {...rest} />
}

export default CommentTable
