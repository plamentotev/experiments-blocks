import { FileBlockProps } from "@githubnext/blocks";

export default function (props: FileBlockProps) {
  const { context } = props;

  const owner = encodeURIComponent(context.owner);
  const repo = encodeURIComponent(context.repo);
  const sha = encodeURIComponent(context.sha);
  const filePath = encodeURI(context.path);
  const baseURL = new URL(`https://raw.githubusercontent.com/${owner}/${repo}/${sha}/`);

  const audioURL = new URL(filePath, baseURL);

  return <audio controls src={audioURL.href}></audio>;
}
