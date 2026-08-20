import Button from '@/components/ui/Button';

/*
  A smoke test, not a hero. Phase 2 owns the real markup and phase 3 owns the
  form. This exists so the phase 1 definition of done is checkable: one heading
  to prove Coustard loads, one paragraph to prove Inter does, and the button.
  Delete all of it when phase 2 starts.
*/

export default function Home() {
  return (
    <main>
      <h1>Your business deserves to thrive</h1>
      <p>
        We fix the digital problems holding your business back, then hand you
        the framework so the fix stays yours.
      </p>
      <p>
        <Button>Join the waitlist</Button>
      </p>
    </main>
  );
}
