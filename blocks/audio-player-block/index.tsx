import { FileBlockProps } from "@githubnext/blocks";
import { getURL } from "../utils/url";

export default function (props: FileBlockProps) {
  const { context } = props;

  const audioURL = getURL(context, context.path);

  return <audio controls src={audioURL}></audio>;
}
