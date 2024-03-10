import {
  AlertDescription,
  AlertTitle,
  Alert as SCNAlert,
} from '@/components/ui/alert';

type AlertProps = {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
  Icon?: React.ReactNode;
  className?: string;
};

function Alert({
  title,
  description,
  Icon,
  variant = 'default',
  className,
}: AlertProps) {
  return (
    <SCNAlert className={className} variant={variant}>
      {Icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </SCNAlert>
  );
}

export { Alert, type AlertProps };
