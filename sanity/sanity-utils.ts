import { groq } from 'next-sanity';
import { Project } from '@/types/Project';
import { client } from './lib/client';

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == 'project' && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
