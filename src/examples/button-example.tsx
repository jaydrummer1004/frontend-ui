import { Button } from '../components/button';
import { Star } from '../icons/star';

export function ButtonExample() {
  return (
      <div className="flex flex-wrap items-center gap-5">
        <Button size="md">Button CTA</Button>
        <Button size="lg">
          <Star />
          Button CTA
        </Button>
        <Button size="xl">
          Button CTA
          <Star />
        </Button>
        <Button size="xxl">Button CTA</Button>
        <Button><Star /></Button>
      </div>
  );
}
