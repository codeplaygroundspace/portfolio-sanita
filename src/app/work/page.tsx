import React from 'react';
import BadgeConnou from '@/components/BadgeConnou';

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products people love <span>💕</span>
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Connou</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend developer, September 2022 — present
        </p>
        <p>
          I joined{' '}
          <span className="not-prose">
            <BadgeConnou href="https://www.connou.app">Connou</BadgeConnou>
          </span>{' '}
          with the aim to practice what I have learned in my coding bootcamp. I
          wanted to work with TypeScript and Next.js to build powerfull
          products.
        </p>
        <ul className="list-none px-0">
          <li>
            <span>✅</span>
            <strong> Develop and maintain React components</strong>: by using
            TypeScript and Next.js to optimise performance and functionality
          </li>
          <li>
            <span>✅</span>
            <strong> Reduce build time</strong>: by migrating from Styled
            Components to TailwindCSS, improving performance and ensuring a
            consistent design system across the project.
          </li>
          <li>
            <span>✅</span>
            <strong> Implementing unit test using Jest</strong>: improving code
            reliability and reducing bugs, resulting in a more stable and
            maintainable application.
          </li>
          <li>
            <span>✅</span>
            <strong> Implement responsive design</strong> and cross-browser
            compatibility to ensure optimal user experience on all devices.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Transitioning to development
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend Development (JavaScript) Bootcamp, January 2022
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          My Home Move Ltd
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Intermediate Conveyancer, 2022 - 2022
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Gorvins Residential LLP
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Conveyancing Paralegal, 2021 - 2022
        </p>
      </div>
    </section>
  );
}
