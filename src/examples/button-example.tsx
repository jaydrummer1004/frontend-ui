import { Button } from '../components/button';
import { Star } from '../icons/star';

export function ButtonExample() {
  return (
    <div className='grid gap-2'>
      <Button size="sm">Button CTA</Button>
      <Button size="md"><Star />Button CTA</Button>
      <Button size="lg">Button CTA</Button>
    </div>
  );
}
