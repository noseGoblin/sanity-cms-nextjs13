import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
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
          <div
            key={project._id}
            className='border border-gray-500 rounded-lg mb-2'
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='font-extrabold bg-gradient-to-r bg-no-repeat from-orange-400 to-purple-600 bg-clip-text text-transparent p-2'>
              {project.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
