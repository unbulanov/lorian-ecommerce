import cn from 'clsx';
import { CSSProperties, FC, PropsWithChildren } from 'react';

interface IRow {
  isBorder?: boolean,
  className?: string,
  style?: CSSProperties
}

const Row: FC<PropsWithChildren<IRow>> = ({
  children,
  className,
  isBorder = true,
  style = {}
}) => {
  return <div className={cn(
    'grid w-full grid-cols-12',
    {
      'border-b-2 border-black border-solid': isBorder
    },
    className)}
    style={style}
    >
    {children}
  </div>
}

export default Row;