import { Bold } from '@/_components/text/TextStyles';

function AboutBio() {
  return (
    <div className='flex flex-col gap-4 px-4 text-justify'>
      <p>
        Hi! I'm a fullstack design-dev hybrid based in <Bold>Portland, OR</Bold>
        .
      </p>
      <p>
        Since March 2024, I've been deep in the world of JavaScript, React, and
        modern frontend development through self-guided learning and hands-on
        projects. I love building clean, functional, and user-focused interfaces
        — and I'm not afraid to go full-stack when the project calls for it.
      </p>
      <p>
        Before dev life, I spent nearly a decade in visual merchandising —
        planning, styling, and collaborating with tight-knit teams. These days,
        I bring that same creative eye and project-driven mindset into every
        line of code.
      </p>
    </div>
  );
}

export default AboutBio;
