import { FolderBlockProps, FolderContext, TreeItem } from "@githubnext/blocks";
import ImageGallery from "react-image-gallery";
import { getURL } from "../utils/url";

import "react-image-gallery/styles/css/image-gallery.css"

export default function ImageGaleryBlock(props: FolderBlockProps) {
  const { context, tree } = props;

  const images = tree
    .filter(trreItem => isImageFile(context, trreItem))
    .map(treeItem => {
      const imageUrl = getImageURL(context, treeItem)
      return { original: imageUrl, thumbnail: imageUrl };
    });

  return <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />;
}

function getImageURL(context: FolderContext, treeItem: TreeItem): string {
  return getURL(context, treeItem.path!);
}

function isImageFile(context: FolderContext, treeItem: TreeItem): boolean {
    const { path } = treeItem;
    // filter items without path, as we could not display them anyway
    if (!path) {
      return false;
    }

    return (treeItem.type === "blob") && // no directories, files only
      isTopLevelFile(context, path) && // no files in sub-directories
      hasImageExtension(path);
}

function isTopLevelFile(context: FolderContext, path: string): boolean {
  const filePath = path.replace(`${context.path}/`, "");

  return !filePath.includes("/");  
}
  
function hasImageExtension(path: string): boolean {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg"];

  return imageExtensions.some(ext => path.endsWith(ext));
}
