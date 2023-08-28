import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

export async function getProjects() {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

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
