type Context = { owner: string, repo: string, sha: string };

export function getURL(context: Context, filePath: string): string {
  const owner = encodeURIComponent(context.owner);
  const repo = encodeURIComponent(context.repo);
  const sha = encodeURIComponent(context.sha);
  const path = encodeURI(filePath);

  const baseURL = new URL(`https://github.com/${owner}/${repo}/raw/${sha}/`);
  const url = new URL(path, baseURL);
  
  return url.toString();
}
