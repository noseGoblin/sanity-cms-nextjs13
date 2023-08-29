import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from 'react';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className='max-w-5xl mx-auto py-20 min-h-screen mx-3 md:mx-6 lg:mx-auto'>
      <h1 className='text-7xl font-extrabold'>
        Hello I&apos;m{' '}
        <span className='bg-gradient-to-r bg-no-repeat from-orange-400 to-purple-600 bg-clip-text text-transparent'>
          Jay
        </span>
        !
      </h1>

      <p className='mt-3 text-xl text-gray-600'>
        Hola everyone! Check out my projects!
      </p>
      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>

      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='border-2 border-gray-500 rounded-lg p-1'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='mt-2 font-extrabold bg-gradient-to-r bg-no-repeat from-orange-400 to-purple-600 bg-clip-text text-transparent p-2'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
