import { getProject } from '@/sanity/sanity-utils';
import Link from 'next/link';

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div className='min-h-screen max-w-3xl mx-auto py-20'>
      <header className='flex items-center justify-between'>
        <h1 className='bg-gradient-to-r bg-no-repeat from-orange-400 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
          {project.name}
        </h1>
        <Link
          href={project.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition duration-300 ease-in-out'
        >
          View Project
        </Link>
      </header>

      {/* content */}

      {/* image */}
    </div>
  );
}
