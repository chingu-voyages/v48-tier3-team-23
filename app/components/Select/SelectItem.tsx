import { ListBoxItem, ListBoxItemProps } from 'react-aria-components'

export function SelectItem(props: ListBoxItemProps) {
  return <ListBoxItem {...props} className={'p-1 cursor-pointer'} />
}
