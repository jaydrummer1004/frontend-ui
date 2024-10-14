import { Badge } from '../components/badge';

export function BadgeExample() {
  return (
    <div className="grid gap-12">
      <div className="flex flex-wrap items-center gap-5">
        <Badge size="sm">Label</Badge>
        <Badge size="md">Label</Badge>
        <Badge size="lg">Label</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Badge variant="destructive" size="sm">Label</Badge>
        <Badge variant="destructive" size="md">Label</Badge>
        <Badge variant="destructive" size="lg">Label</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Badge variant="warning" size="sm">Label</Badge>
        <Badge variant="warning" size="md">Label</Badge>
        <Badge variant="warning" size="lg">Label</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Badge size="sm">Label</Badge>
        <Badge size="md">Label</Badge>
        <Badge size="lg">Label</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Badge size="sm">Label</Badge>
        <Badge size="md">Label</Badge>
        <Badge size="lg">Label</Badge>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Badge size="sm">Label</Badge>
        <Badge size="md">Label</Badge>
        <Badge size="lg">Label</Badge>
      </div>
    </div>
  );
}
