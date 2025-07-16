'use client';

import { Feature } from '@/_types/project';
import EmblaCarousel from './EmblaCarousel';

function ProjectPageFeatures({ features }: { features: Feature[] }) {
  return <EmblaCarousel slides={features} options={{ loop: true }} />;
}

export default ProjectPageFeatures;
