import {
  Button,
  FieldError,
  Label,
  ListBox,
  Popover,
  Select as AriaSelect,
  SelectValue,
  SelectProps,
  ValidationResult,
  Text,
} from 'react-aria-components'

interface MySelectProps<T extends object>
  extends Omit<SelectProps<T>, 'children'> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}: MySelectProps<T>) {
  return (
    <AriaSelect {...props}>
      <Label className="mr-1">{label}</Label>
      <Button>
        <SelectValue className="p-2" />
        <span aria-hidden="true">▼</span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  )
}
