import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ideas/$ideasId/')({
  component: IdeaDetailsPage,
});

function IdeaDetailsPage() {
  return <div>Hello "/ideas/$ideasId/"!</div>;
}
