import { getProjects } from '@/sanity/sanity-utils';
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
    <div className='max-w-5xl mx-auto py-20'>
      <h1 className='text-7xl font-extrabold'>
        Hello I&apos;m{' '}
        <span className='bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>
          Jay
        </span>
        !
      </h1>

      <p className='mt-3 text-xl text-gray-600'>
        Hola everyone! Check out my projects!
      </p>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
