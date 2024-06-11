import { FC } from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  summary: string;
}

// Function to render blog posts (title, summary, and slug)
export function getAllBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const mdxFiles = filenames.filter((filename) => filename.endsWith('.mdx'));

  const blogPosts = mdxFiles.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
      summary: data.summary,
    };
  });
  return blogPosts;
}

// Blog posts component
export const LinkBlog: FC<BlogPost> = ({ slug, title, summary }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h3 className="font-medium text-lg mb-2 tracking-tight">{title}</h3>
      <p>{summary}</p>
    </Link>
  );
};

{
  /* <a ></a> */
}