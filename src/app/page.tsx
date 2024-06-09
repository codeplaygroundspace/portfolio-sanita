import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface LinkBlogProp {
  slug: string;
  name: string;
}

const LinkBlog: FC<LinkBlogProp> = ({ slug, name }) => {
  return (
    <a
      href={`/blog/${slug}`}
      className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      {name}
    </a>
  );
};

export default function Home() {
  return (
    <section>
      <Image
        src=""
        alt="Sanita"
        height={64}
        width={64}
        sizes="33vw"
        priority
        className="h-16 w-16 rounded-full border
        border-neutral-200 dark:border-neutral-700"
      />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I&#8217;m Sanita 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a frontend developer, optimist, and community enthusiast. I
        currently`}{' '}
        <Link href="/work">work</Link>
        {`as developer at the startup `}
        <span className="not-prose">Connou</span>
        {`, where I help build an
        education platform for Universities, using Typescript and Nextj.s`}
      </p>
      {/* box */}
      <p>
        I help building reusable components and refactoring for cleaner and
        maintainable code. Currently, I&#8217;m migrating styled components to
        TailwindCSS, one component at a time. I work independently and I’m happy
        to collaborate with designers and other developers.
      </p>
      {/* box */}
      <p>
        I recently started writing content on my blog as a way to become better
        a communicator. You will find articles about technologies I’m interested
        in at the time, or how I&#8217;m learning and growing in my career,
        sharing knowledge along the way.
      </p>
      <div className="my-8 flex w-full flex-col space-y-4"></div>

      <LinkBlog
        name="How to change Tailwind CSS base font size"
        slug="change-tailwind-base-font-size"
      />
      {/* article */}
      {/* article */}
      {/* article */}
      <p>
        While using the latest framework, I still spend time learning and
        practising the fundamentals of Javascript and CSS, I have a dedicated
        lab section for it.
      </p>
      {/* Lab card */}
      {/* Lab card */}
      <p>My focus is on the following technologies:</p>
      {/* tech tag */}
      {/* tech tag */}
      {/* tech tag */}
      <ul>
        <li>
          <a href="">LikendIn</a>
        </li>
        <li>
          <a href="">GitHub</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
    </section>
  );
}
