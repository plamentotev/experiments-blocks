type Context = { owner: string, repo: string, sha: string };

export function getURL(context: Context, filePath: string): string {
  const owner = encodeURIComponent(context.owner);
  const repo = encodeURIComponent(context.repo);
  const sha = encodeURIComponent(context.sha);
  const path = encodeURI(filePath);

  const baseURL = new URL(`https://raw.githubusercontent.com/${owner}/${repo}/${sha}/`);
  const url = new URL(path, baseURL);
  
  return url.toString();
}
