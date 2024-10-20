import { Button } from '../components/button';
import { Star } from '../icons/star';

export function ButtonExample() {
  return (
    <div className='grid gap-12'>
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
        <Button size="xxl" iconOnly>
          <Star />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Button variant="secondary" size="md">Button CTA</Button>
        <Button variant="secondary" size="lg">
          <Star />
          Button CTA
        </Button>
        <Button variant="secondary" size="xl">
          Button CTA
          <Star />
        </Button>
        <Button variant="secondary" size="xxl">Button CTA</Button>
        <Button variant="secondary" size="xxl" iconOnly>
          <Star />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Button variant="tertiary" size="md">Button CTA</Button>
        <Button variant="tertiary" size="lg">
          <Star />
          Button CTA
        </Button>
        <Button variant="tertiary" size="xl">
          Button CTA
          <Star />
        </Button>
        <Button variant="tertiary" size="xxl">Button CTA</Button>
        <Button variant="tertiary" size="xxl" iconOnly>
          <Star />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Button variant="linkPrimary" size="md">Button CTA</Button>
        <Button variant="linkPrimary" size="lg">
          <Star />
          Button CTA
        </Button>
        <Button variant="linkPrimary" size="xl">
          Button CTA
          <Star />
        </Button>
        <Button variant="linkPrimary" size="xxl">Button CTA</Button>
        <Button variant="linkPrimary" size="xxl" iconOnly>
          <Star />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Button variant="linkSecondary" size="md">Button CTA</Button>
        <Button variant="linkSecondary" size="lg">
          <Star />
          Button CTA
        </Button>
        <Button variant="linkSecondary" size="xl">
          Button CTA
          <Star />
        </Button>
        <Button variant="linkSecondary" size="xxl">Button CTA</Button>
        <Button variant="linkSecondary" size="xxl" iconOnly>
          <Star />
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-5">
        <Button variant="destructive" size="md">Button CTA</Button>
        <Button variant="destructive" size="lg">
          <Star />
          Button CTA
        </Button>
        <Button variant="destructive" size="xl">
          Button CTA
          <Star />
        </Button>
        <Button variant="destructive" size="xxl">Button CTA</Button>
        <Button variant="destructive" size="xxl" iconOnly>
          <Star />
        </Button>
      </div>
    </div>
  );
}
